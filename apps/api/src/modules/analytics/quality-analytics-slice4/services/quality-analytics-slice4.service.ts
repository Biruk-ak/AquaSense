/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: QualityAnalyticsSlice4
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
import { QualityAnalyticsSlice4Snapshot } from '../entities/quality-analytics-slice4-snapshot.entity';
import { CreateQualityAnalyticsSlice4Dto, UpdateQualityAnalyticsSlice4Dto, QualityAnalyticsSlice4QueryDto } from '../dto/quality-analytics-slice4.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class QualityAnalyticsSlice4Service {
  private readonly logger = new Logger(QualityAnalyticsSlice4Service.name);

  constructor(
    @InjectRepository(QualityAnalyticsSlice4Snapshot)
    private readonly repository: Repository<QualityAnalyticsSlice4Snapshot>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateQualityAnalyticsSlice4Dto, actorId: string): Promise<QualityAnalyticsSlice4Snapshot> {
    this.logger.log(`Creating QualityAnalyticsSlice4 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<QualityAnalyticsSlice4Snapshot>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'QualityAnalyticsSlice4.created',
      actorId,
      resourceType: 'QualityAnalyticsSlice4Snapshot',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('qualityanalyticsslice4.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: QualityAnalyticsSlice4QueryDto): Promise<PaginatedResult<QualityAnalyticsSlice4Snapshot>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<QualityAnalyticsSlice4Snapshot> = {};
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

  async findById(id: string): Promise<QualityAnalyticsSlice4Snapshot> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<QualityAnalyticsSlice4Snapshot> });
    if (!entity) {
      throw new NotFoundException(`QualityAnalyticsSlice4Snapshot ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateQualityAnalyticsSlice4Dto, actorId: string): Promise<QualityAnalyticsSlice4Snapshot> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'QualityAnalyticsSlice4.updated',
      actorId,
      resourceType: 'QualityAnalyticsSlice4Snapshot',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('qualityanalyticsslice4.updated', {
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
      action: 'QualityAnalyticsSlice4.deleted',
      actorId,
      resourceType: 'QualityAnalyticsSlice4Snapshot',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('qualityanalyticsslice4.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateQualityAnalyticsSlice4Dto[], actorId: string): Promise<QualityAnalyticsSlice4Snapshot[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<QualityAnalyticsSlice4Snapshot>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'QualityAnalyticsSlice4.bulk_created',
      actorId,
      resourceType: 'QualityAnalyticsSlice4Snapshot',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: QualityAnalyticsSlice4QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<QualityAnalyticsSlice4Snapshot>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<QualityAnalyticsSlice4Snapshot[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<QualityAnalyticsSlice4Snapshot> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
