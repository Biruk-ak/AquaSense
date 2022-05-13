/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: HighUseBillingCycle4
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
import { HighUseBillingCycle4Invoice } from '../entities/high-use-billing-cycle4-invoice.entity';
import { CreateHighUseBillingCycle4Dto, UpdateHighUseBillingCycle4Dto, HighUseBillingCycle4QueryDto } from '../dto/high-use-billing-cycle4.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class HighUseBillingCycle4Service {
  private readonly logger = new Logger(HighUseBillingCycle4Service.name);

  constructor(
    @InjectRepository(HighUseBillingCycle4Invoice)
    private readonly repository: Repository<HighUseBillingCycle4Invoice>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateHighUseBillingCycle4Dto, actorId: string): Promise<HighUseBillingCycle4Invoice> {
    this.logger.log(`Creating HighUseBillingCycle4 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<HighUseBillingCycle4Invoice>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'HighUseBillingCycle4.created',
      actorId,
      resourceType: 'HighUseBillingCycle4Invoice',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('highusebillingcycle4.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: HighUseBillingCycle4QueryDto): Promise<PaginatedResult<HighUseBillingCycle4Invoice>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<HighUseBillingCycle4Invoice> = {};
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

  async findById(id: string): Promise<HighUseBillingCycle4Invoice> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<HighUseBillingCycle4Invoice> });
    if (!entity) {
      throw new NotFoundException(`HighUseBillingCycle4Invoice ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateHighUseBillingCycle4Dto, actorId: string): Promise<HighUseBillingCycle4Invoice> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'HighUseBillingCycle4.updated',
      actorId,
      resourceType: 'HighUseBillingCycle4Invoice',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('highusebillingcycle4.updated', {
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
      action: 'HighUseBillingCycle4.deleted',
      actorId,
      resourceType: 'HighUseBillingCycle4Invoice',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('highusebillingcycle4.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateHighUseBillingCycle4Dto[], actorId: string): Promise<HighUseBillingCycle4Invoice[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<HighUseBillingCycle4Invoice>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'HighUseBillingCycle4.bulk_created',
      actorId,
      resourceType: 'HighUseBillingCycle4Invoice',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: HighUseBillingCycle4QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<HighUseBillingCycle4Invoice>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<HighUseBillingCycle4Invoice[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<HighUseBillingCycle4Invoice> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
