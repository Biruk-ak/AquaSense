/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: StandardBillingCycle1
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
import { StandardBillingCycle1Invoice } from '../entities/standard-billing-cycle1-invoice.entity';
import { CreateStandardBillingCycle1Dto, UpdateStandardBillingCycle1Dto, StandardBillingCycle1QueryDto } from '../dto/standard-billing-cycle1.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class StandardBillingCycle1Service {
  private readonly logger = new Logger(StandardBillingCycle1Service.name);

  constructor(
    @InjectRepository(StandardBillingCycle1Invoice)
    private readonly repository: Repository<StandardBillingCycle1Invoice>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateStandardBillingCycle1Dto, actorId: string): Promise<StandardBillingCycle1Invoice> {
    this.logger.log(`Creating StandardBillingCycle1 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<StandardBillingCycle1Invoice>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'StandardBillingCycle1.created',
      actorId,
      resourceType: 'StandardBillingCycle1Invoice',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('standardbillingcycle1.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: StandardBillingCycle1QueryDto): Promise<PaginatedResult<StandardBillingCycle1Invoice>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<StandardBillingCycle1Invoice> = {};
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

  async findById(id: string): Promise<StandardBillingCycle1Invoice> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<StandardBillingCycle1Invoice> });
    if (!entity) {
      throw new NotFoundException(`StandardBillingCycle1Invoice ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateStandardBillingCycle1Dto, actorId: string): Promise<StandardBillingCycle1Invoice> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'StandardBillingCycle1.updated',
      actorId,
      resourceType: 'StandardBillingCycle1Invoice',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('standardbillingcycle1.updated', {
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
      action: 'StandardBillingCycle1.deleted',
      actorId,
      resourceType: 'StandardBillingCycle1Invoice',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('standardbillingcycle1.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateStandardBillingCycle1Dto[], actorId: string): Promise<StandardBillingCycle1Invoice[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<StandardBillingCycle1Invoice>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'StandardBillingCycle1.bulk_created',
      actorId,
      resourceType: 'StandardBillingCycle1Invoice',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: StandardBillingCycle1QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<StandardBillingCycle1Invoice>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<StandardBillingCycle1Invoice[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<StandardBillingCycle1Invoice> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
