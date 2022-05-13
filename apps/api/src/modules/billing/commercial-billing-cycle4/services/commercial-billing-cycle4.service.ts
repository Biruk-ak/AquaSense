/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: CommercialBillingCycle4
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
import { CommercialBillingCycle4Invoice } from '../entities/commercial-billing-cycle4-invoice.entity';
import { CreateCommercialBillingCycle4Dto, UpdateCommercialBillingCycle4Dto, CommercialBillingCycle4QueryDto } from '../dto/commercial-billing-cycle4.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class CommercialBillingCycle4Service {
  private readonly logger = new Logger(CommercialBillingCycle4Service.name);

  constructor(
    @InjectRepository(CommercialBillingCycle4Invoice)
    private readonly repository: Repository<CommercialBillingCycle4Invoice>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateCommercialBillingCycle4Dto, actorId: string): Promise<CommercialBillingCycle4Invoice> {
    this.logger.log(`Creating CommercialBillingCycle4 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<CommercialBillingCycle4Invoice>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'CommercialBillingCycle4.created',
      actorId,
      resourceType: 'CommercialBillingCycle4Invoice',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('commercialbillingcycle4.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: CommercialBillingCycle4QueryDto): Promise<PaginatedResult<CommercialBillingCycle4Invoice>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<CommercialBillingCycle4Invoice> = {};
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

  async findById(id: string): Promise<CommercialBillingCycle4Invoice> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<CommercialBillingCycle4Invoice> });
    if (!entity) {
      throw new NotFoundException(`CommercialBillingCycle4Invoice ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateCommercialBillingCycle4Dto, actorId: string): Promise<CommercialBillingCycle4Invoice> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'CommercialBillingCycle4.updated',
      actorId,
      resourceType: 'CommercialBillingCycle4Invoice',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('commercialbillingcycle4.updated', {
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
      action: 'CommercialBillingCycle4.deleted',
      actorId,
      resourceType: 'CommercialBillingCycle4Invoice',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('commercialbillingcycle4.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateCommercialBillingCycle4Dto[], actorId: string): Promise<CommercialBillingCycle4Invoice[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<CommercialBillingCycle4Invoice>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'CommercialBillingCycle4.bulk_created',
      actorId,
      resourceType: 'CommercialBillingCycle4Invoice',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: CommercialBillingCycle4QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<CommercialBillingCycle4Invoice>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<CommercialBillingCycle4Invoice[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<CommercialBillingCycle4Invoice> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
