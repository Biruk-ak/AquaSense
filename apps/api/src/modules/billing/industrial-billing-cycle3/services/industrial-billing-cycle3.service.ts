/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: IndustrialBillingCycle3
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
import { IndustrialBillingCycle3Invoice } from '../entities/industrial-billing-cycle3-invoice.entity';
import { CreateIndustrialBillingCycle3Dto, UpdateIndustrialBillingCycle3Dto, IndustrialBillingCycle3QueryDto } from '../dto/industrial-billing-cycle3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class IndustrialBillingCycle3Service {
  private readonly logger = new Logger(IndustrialBillingCycle3Service.name);

  constructor(
    @InjectRepository(IndustrialBillingCycle3Invoice)
    private readonly repository: Repository<IndustrialBillingCycle3Invoice>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateIndustrialBillingCycle3Dto, actorId: string): Promise<IndustrialBillingCycle3Invoice> {
    this.logger.log(`Creating IndustrialBillingCycle3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<IndustrialBillingCycle3Invoice>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'IndustrialBillingCycle3.created',
      actorId,
      resourceType: 'IndustrialBillingCycle3Invoice',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('industrialbillingcycle3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: IndustrialBillingCycle3QueryDto): Promise<PaginatedResult<IndustrialBillingCycle3Invoice>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<IndustrialBillingCycle3Invoice> = {};
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

  async findById(id: string): Promise<IndustrialBillingCycle3Invoice> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<IndustrialBillingCycle3Invoice> });
    if (!entity) {
      throw new NotFoundException(`IndustrialBillingCycle3Invoice ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateIndustrialBillingCycle3Dto, actorId: string): Promise<IndustrialBillingCycle3Invoice> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'IndustrialBillingCycle3.updated',
      actorId,
      resourceType: 'IndustrialBillingCycle3Invoice',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('industrialbillingcycle3.updated', {
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
      action: 'IndustrialBillingCycle3.deleted',
      actorId,
      resourceType: 'IndustrialBillingCycle3Invoice',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('industrialbillingcycle3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateIndustrialBillingCycle3Dto[], actorId: string): Promise<IndustrialBillingCycle3Invoice[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<IndustrialBillingCycle3Invoice>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'IndustrialBillingCycle3.bulk_created',
      actorId,
      resourceType: 'IndustrialBillingCycle3Invoice',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: IndustrialBillingCycle3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<IndustrialBillingCycle3Invoice>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<IndustrialBillingCycle3Invoice[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<IndustrialBillingCycle3Invoice> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
