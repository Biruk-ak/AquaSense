/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: HighUseBillingCycle5
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
import { HighUseBillingCycle5Invoice } from '../entities/high-use-billing-cycle5-invoice.entity';
import { CreateHighUseBillingCycle5Dto, UpdateHighUseBillingCycle5Dto, HighUseBillingCycle5QueryDto } from '../dto/high-use-billing-cycle5.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class HighUseBillingCycle5Service {
  private readonly logger = new Logger(HighUseBillingCycle5Service.name);

  constructor(
    @InjectRepository(HighUseBillingCycle5Invoice)
    private readonly repository: Repository<HighUseBillingCycle5Invoice>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateHighUseBillingCycle5Dto, actorId: string): Promise<HighUseBillingCycle5Invoice> {
    this.logger.log(`Creating HighUseBillingCycle5 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<HighUseBillingCycle5Invoice>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'HighUseBillingCycle5.created',
      actorId,
      resourceType: 'HighUseBillingCycle5Invoice',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('highusebillingcycle5.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: HighUseBillingCycle5QueryDto): Promise<PaginatedResult<HighUseBillingCycle5Invoice>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<HighUseBillingCycle5Invoice> = {};
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

  async findById(id: string): Promise<HighUseBillingCycle5Invoice> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<HighUseBillingCycle5Invoice> });
    if (!entity) {
      throw new NotFoundException(`HighUseBillingCycle5Invoice ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateHighUseBillingCycle5Dto, actorId: string): Promise<HighUseBillingCycle5Invoice> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'HighUseBillingCycle5.updated',
      actorId,
      resourceType: 'HighUseBillingCycle5Invoice',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('highusebillingcycle5.updated', {
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
      action: 'HighUseBillingCycle5.deleted',
      actorId,
      resourceType: 'HighUseBillingCycle5Invoice',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('highusebillingcycle5.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateHighUseBillingCycle5Dto[], actorId: string): Promise<HighUseBillingCycle5Invoice[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<HighUseBillingCycle5Invoice>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'HighUseBillingCycle5.bulk_created',
      actorId,
      resourceType: 'HighUseBillingCycle5Invoice',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: HighUseBillingCycle5QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<HighUseBillingCycle5Invoice>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<HighUseBillingCycle5Invoice[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<HighUseBillingCycle5Invoice> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
