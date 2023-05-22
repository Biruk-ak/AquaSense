/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: ConsumptionAnalyticsSlice2
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
import { ConsumptionAnalyticsSlice2Snapshot } from '../entities/consumption-analytics-slice2-snapshot.entity';
import { CreateConsumptionAnalyticsSlice2Dto, UpdateConsumptionAnalyticsSlice2Dto, ConsumptionAnalyticsSlice2QueryDto } from '../dto/consumption-analytics-slice2.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class ConsumptionAnalyticsSlice2Service {
  private readonly logger = new Logger(ConsumptionAnalyticsSlice2Service.name);

  constructor(
    @InjectRepository(ConsumptionAnalyticsSlice2Snapshot)
    private readonly repository: Repository<ConsumptionAnalyticsSlice2Snapshot>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateConsumptionAnalyticsSlice2Dto, actorId: string): Promise<ConsumptionAnalyticsSlice2Snapshot> {
    this.logger.log(`Creating ConsumptionAnalyticsSlice2 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<ConsumptionAnalyticsSlice2Snapshot>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'ConsumptionAnalyticsSlice2.created',
      actorId,
      resourceType: 'ConsumptionAnalyticsSlice2Snapshot',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('consumptionanalyticsslice2.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: ConsumptionAnalyticsSlice2QueryDto): Promise<PaginatedResult<ConsumptionAnalyticsSlice2Snapshot>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<ConsumptionAnalyticsSlice2Snapshot> = {};
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

  async findById(id: string): Promise<ConsumptionAnalyticsSlice2Snapshot> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<ConsumptionAnalyticsSlice2Snapshot> });
    if (!entity) {
      throw new NotFoundException(`ConsumptionAnalyticsSlice2Snapshot ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateConsumptionAnalyticsSlice2Dto, actorId: string): Promise<ConsumptionAnalyticsSlice2Snapshot> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'ConsumptionAnalyticsSlice2.updated',
      actorId,
      resourceType: 'ConsumptionAnalyticsSlice2Snapshot',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('consumptionanalyticsslice2.updated', {
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
      action: 'ConsumptionAnalyticsSlice2.deleted',
      actorId,
      resourceType: 'ConsumptionAnalyticsSlice2Snapshot',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('consumptionanalyticsslice2.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateConsumptionAnalyticsSlice2Dto[], actorId: string): Promise<ConsumptionAnalyticsSlice2Snapshot[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<ConsumptionAnalyticsSlice2Snapshot>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'ConsumptionAnalyticsSlice2.bulk_created',
      actorId,
      resourceType: 'ConsumptionAnalyticsSlice2Snapshot',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: ConsumptionAnalyticsSlice2QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<ConsumptionAnalyticsSlice2Snapshot>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<ConsumptionAnalyticsSlice2Snapshot[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<ConsumptionAnalyticsSlice2Snapshot> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
