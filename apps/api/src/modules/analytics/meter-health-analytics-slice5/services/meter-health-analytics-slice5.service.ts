/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: MeterHealthAnalyticsSlice5
 * @copyright Biruk-ak
 */

import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Between } from 'typeorm';
import { MeterHealthAnalyticsSlice5Snapshot } from '../entities/meter-health-analytics-slice5-snapshot.entity';
import { CreateMeterHealthAnalyticsSlice5Dto, UpdateMeterHealthAnalyticsSlice5Dto, MeterHealthAnalyticsSlice5QueryDto } from '../dto/meter-health-analytics-slice5.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class MeterHealthAnalyticsSlice5Service {
  private readonly logger = new Logger(MeterHealthAnalyticsSlice5Service.name);

  constructor(
    @InjectRepository(MeterHealthAnalyticsSlice5Snapshot)
    private readonly repository: Repository<MeterHealthAnalyticsSlice5Snapshot>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateMeterHealthAnalyticsSlice5Dto, actorId: string): Promise<MeterHealthAnalyticsSlice5Snapshot> {
    this.logger.log(`Creating MeterHealthAnalyticsSlice5 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<MeterHealthAnalyticsSlice5Snapshot>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MeterHealthAnalyticsSlice5.created',
      actorId,
      resourceType: 'MeterHealthAnalyticsSlice5Snapshot',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('meterhealthanalyticsslice5.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: MeterHealthAnalyticsSlice5QueryDto): Promise<PaginatedResult<MeterHealthAnalyticsSlice5Snapshot>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<MeterHealthAnalyticsSlice5Snapshot> = {};
    const [items, total] = await this.repository.findAndCount({
      where,
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: query.sortOrder === 'ASC' ? 'ASC' : 'DESC' },
    });
    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }

  async findById(id: string): Promise<MeterHealthAnalyticsSlice5Snapshot> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<MeterHealthAnalyticsSlice5Snapshot> });
    if (!entity) {
      throw new NotFoundException(`MeterHealthAnalyticsSlice5Snapshot ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateMeterHealthAnalyticsSlice5Dto, actorId: string): Promise<MeterHealthAnalyticsSlice5Snapshot> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MeterHealthAnalyticsSlice5.updated',
      actorId,
      resourceType: 'MeterHealthAnalyticsSlice5Snapshot',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('meterhealthanalyticsslice5.updated', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async remove(id: string, actorId: string): Promise<void> {
    const entity = await this.findById(id);
    await this.repository.remove(entity);
    await this.auditService.record({
      action: 'MeterHealthAnalyticsSlice5.deleted',
      actorId,
      resourceType: 'MeterHealthAnalyticsSlice5Snapshot',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('meterhealthanalyticsslice5.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateMeterHealthAnalyticsSlice5Dto[], actorId: string): Promise<MeterHealthAnalyticsSlice5Snapshot[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<MeterHealthAnalyticsSlice5Snapshot>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'MeterHealthAnalyticsSlice5.bulk_created',
      actorId,
      resourceType: 'MeterHealthAnalyticsSlice5Snapshot',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: MeterHealthAnalyticsSlice5QueryDto): Promise<string> {
    const result = await this.findAll({ ...query, limit: 10000 });
    if (!result.items.length) {
      return '';
    }
    const keys = Object.keys(result.items[0].toPublicView());
    const headerLine = keys.join(',');
    const rows = result.items.map((item) => {
      const view = item.toPublicView();
      return keys.map((k) => JSON.stringify(view[k] ?? '')).join(',');
    });
    return [headerLine, ...rows].join('\n');
  }

  async computeSummary(from: Date, to: Date): Promise<Record<string, number>> {
    const items = await this.repository.find({
      where: { createdAt: Between(from, to) } as FindOptionsWhere<MeterHealthAnalyticsSlice5Snapshot>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<MeterHealthAnalyticsSlice5Snapshot[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<MeterHealthAnalyticsSlice5Snapshot> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
