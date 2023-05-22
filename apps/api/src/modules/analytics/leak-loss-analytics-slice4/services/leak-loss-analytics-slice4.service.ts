/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: LeakLossAnalyticsSlice4
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
import { LeakLossAnalyticsSlice4Snapshot } from '../entities/leak-loss-analytics-slice4-snapshot.entity';
import { CreateLeakLossAnalyticsSlice4Dto, UpdateLeakLossAnalyticsSlice4Dto, LeakLossAnalyticsSlice4QueryDto } from '../dto/leak-loss-analytics-slice4.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class LeakLossAnalyticsSlice4Service {
  private readonly logger = new Logger(LeakLossAnalyticsSlice4Service.name);

  constructor(
    @InjectRepository(LeakLossAnalyticsSlice4Snapshot)
    private readonly repository: Repository<LeakLossAnalyticsSlice4Snapshot>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateLeakLossAnalyticsSlice4Dto, actorId: string): Promise<LeakLossAnalyticsSlice4Snapshot> {
    this.logger.log(`Creating LeakLossAnalyticsSlice4 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<LeakLossAnalyticsSlice4Snapshot>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakLossAnalyticsSlice4.created',
      actorId,
      resourceType: 'LeakLossAnalyticsSlice4Snapshot',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('leaklossanalyticsslice4.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: LeakLossAnalyticsSlice4QueryDto): Promise<PaginatedResult<LeakLossAnalyticsSlice4Snapshot>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<LeakLossAnalyticsSlice4Snapshot> = {};
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

  async findById(id: string): Promise<LeakLossAnalyticsSlice4Snapshot> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<LeakLossAnalyticsSlice4Snapshot> });
    if (!entity) {
      throw new NotFoundException(`LeakLossAnalyticsSlice4Snapshot ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateLeakLossAnalyticsSlice4Dto, actorId: string): Promise<LeakLossAnalyticsSlice4Snapshot> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakLossAnalyticsSlice4.updated',
      actorId,
      resourceType: 'LeakLossAnalyticsSlice4Snapshot',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('leaklossanalyticsslice4.updated', {
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
      action: 'LeakLossAnalyticsSlice4.deleted',
      actorId,
      resourceType: 'LeakLossAnalyticsSlice4Snapshot',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('leaklossanalyticsslice4.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateLeakLossAnalyticsSlice4Dto[], actorId: string): Promise<LeakLossAnalyticsSlice4Snapshot[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<LeakLossAnalyticsSlice4Snapshot>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'LeakLossAnalyticsSlice4.bulk_created',
      actorId,
      resourceType: 'LeakLossAnalyticsSlice4Snapshot',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: LeakLossAnalyticsSlice4QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<LeakLossAnalyticsSlice4Snapshot>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<LeakLossAnalyticsSlice4Snapshot[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<LeakLossAnalyticsSlice4Snapshot> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
