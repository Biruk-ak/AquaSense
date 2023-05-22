/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: OutageAnalyticsSlice3
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
import { OutageAnalyticsSlice3Snapshot } from '../entities/outage-analytics-slice3-snapshot.entity';
import { CreateOutageAnalyticsSlice3Dto, UpdateOutageAnalyticsSlice3Dto, OutageAnalyticsSlice3QueryDto } from '../dto/outage-analytics-slice3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class OutageAnalyticsSlice3Service {
  private readonly logger = new Logger(OutageAnalyticsSlice3Service.name);

  constructor(
    @InjectRepository(OutageAnalyticsSlice3Snapshot)
    private readonly repository: Repository<OutageAnalyticsSlice3Snapshot>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateOutageAnalyticsSlice3Dto, actorId: string): Promise<OutageAnalyticsSlice3Snapshot> {
    this.logger.log(`Creating OutageAnalyticsSlice3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<OutageAnalyticsSlice3Snapshot>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'OutageAnalyticsSlice3.created',
      actorId,
      resourceType: 'OutageAnalyticsSlice3Snapshot',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('outageanalyticsslice3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: OutageAnalyticsSlice3QueryDto): Promise<PaginatedResult<OutageAnalyticsSlice3Snapshot>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<OutageAnalyticsSlice3Snapshot> = {};
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

  async findById(id: string): Promise<OutageAnalyticsSlice3Snapshot> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<OutageAnalyticsSlice3Snapshot> });
    if (!entity) {
      throw new NotFoundException(`OutageAnalyticsSlice3Snapshot ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateOutageAnalyticsSlice3Dto, actorId: string): Promise<OutageAnalyticsSlice3Snapshot> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'OutageAnalyticsSlice3.updated',
      actorId,
      resourceType: 'OutageAnalyticsSlice3Snapshot',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('outageanalyticsslice3.updated', {
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
      action: 'OutageAnalyticsSlice3.deleted',
      actorId,
      resourceType: 'OutageAnalyticsSlice3Snapshot',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('outageanalyticsslice3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateOutageAnalyticsSlice3Dto[], actorId: string): Promise<OutageAnalyticsSlice3Snapshot[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<OutageAnalyticsSlice3Snapshot>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'OutageAnalyticsSlice3.bulk_created',
      actorId,
      resourceType: 'OutageAnalyticsSlice3Snapshot',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: OutageAnalyticsSlice3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<OutageAnalyticsSlice3Snapshot>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<OutageAnalyticsSlice3Snapshot[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<OutageAnalyticsSlice3Snapshot> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
