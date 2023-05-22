/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: RevenueAnalyticsSlice3
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
import { RevenueAnalyticsSlice3Snapshot } from '../entities/revenue-analytics-slice3-snapshot.entity';
import { CreateRevenueAnalyticsSlice3Dto, UpdateRevenueAnalyticsSlice3Dto, RevenueAnalyticsSlice3QueryDto } from '../dto/revenue-analytics-slice3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class RevenueAnalyticsSlice3Service {
  private readonly logger = new Logger(RevenueAnalyticsSlice3Service.name);

  constructor(
    @InjectRepository(RevenueAnalyticsSlice3Snapshot)
    private readonly repository: Repository<RevenueAnalyticsSlice3Snapshot>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateRevenueAnalyticsSlice3Dto, actorId: string): Promise<RevenueAnalyticsSlice3Snapshot> {
    this.logger.log(`Creating RevenueAnalyticsSlice3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<RevenueAnalyticsSlice3Snapshot>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'RevenueAnalyticsSlice3.created',
      actorId,
      resourceType: 'RevenueAnalyticsSlice3Snapshot',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('revenueanalyticsslice3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: RevenueAnalyticsSlice3QueryDto): Promise<PaginatedResult<RevenueAnalyticsSlice3Snapshot>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<RevenueAnalyticsSlice3Snapshot> = {};
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

  async findById(id: string): Promise<RevenueAnalyticsSlice3Snapshot> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<RevenueAnalyticsSlice3Snapshot> });
    if (!entity) {
      throw new NotFoundException(`RevenueAnalyticsSlice3Snapshot ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateRevenueAnalyticsSlice3Dto, actorId: string): Promise<RevenueAnalyticsSlice3Snapshot> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'RevenueAnalyticsSlice3.updated',
      actorId,
      resourceType: 'RevenueAnalyticsSlice3Snapshot',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('revenueanalyticsslice3.updated', {
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
      action: 'RevenueAnalyticsSlice3.deleted',
      actorId,
      resourceType: 'RevenueAnalyticsSlice3Snapshot',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('revenueanalyticsslice3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateRevenueAnalyticsSlice3Dto[], actorId: string): Promise<RevenueAnalyticsSlice3Snapshot[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<RevenueAnalyticsSlice3Snapshot>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'RevenueAnalyticsSlice3.bulk_created',
      actorId,
      resourceType: 'RevenueAnalyticsSlice3Snapshot',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: RevenueAnalyticsSlice3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<RevenueAnalyticsSlice3Snapshot>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<RevenueAnalyticsSlice3Snapshot[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<RevenueAnalyticsSlice3Snapshot> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
