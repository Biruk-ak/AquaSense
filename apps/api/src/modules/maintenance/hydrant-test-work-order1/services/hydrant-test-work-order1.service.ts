/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: HydrantTestWorkOrder1
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
import { HydrantTestWorkOrder1Ticket } from '../entities/hydrant-test-work-order1-ticket.entity';
import { CreateHydrantTestWorkOrder1Dto, UpdateHydrantTestWorkOrder1Dto, HydrantTestWorkOrder1QueryDto } from '../dto/hydrant-test-work-order1.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class HydrantTestWorkOrder1Service {
  private readonly logger = new Logger(HydrantTestWorkOrder1Service.name);

  constructor(
    @InjectRepository(HydrantTestWorkOrder1Ticket)
    private readonly repository: Repository<HydrantTestWorkOrder1Ticket>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateHydrantTestWorkOrder1Dto, actorId: string): Promise<HydrantTestWorkOrder1Ticket> {
    this.logger.log(`Creating HydrantTestWorkOrder1 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<HydrantTestWorkOrder1Ticket>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'HydrantTestWorkOrder1.created',
      actorId,
      resourceType: 'HydrantTestWorkOrder1Ticket',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('hydranttestworkorder1.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: HydrantTestWorkOrder1QueryDto): Promise<PaginatedResult<HydrantTestWorkOrder1Ticket>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<HydrantTestWorkOrder1Ticket> = {};
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

  async findById(id: string): Promise<HydrantTestWorkOrder1Ticket> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<HydrantTestWorkOrder1Ticket> });
    if (!entity) {
      throw new NotFoundException(`HydrantTestWorkOrder1Ticket ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateHydrantTestWorkOrder1Dto, actorId: string): Promise<HydrantTestWorkOrder1Ticket> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'HydrantTestWorkOrder1.updated',
      actorId,
      resourceType: 'HydrantTestWorkOrder1Ticket',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('hydranttestworkorder1.updated', {
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
      action: 'HydrantTestWorkOrder1.deleted',
      actorId,
      resourceType: 'HydrantTestWorkOrder1Ticket',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('hydranttestworkorder1.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateHydrantTestWorkOrder1Dto[], actorId: string): Promise<HydrantTestWorkOrder1Ticket[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<HydrantTestWorkOrder1Ticket>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'HydrantTestWorkOrder1.bulk_created',
      actorId,
      resourceType: 'HydrantTestWorkOrder1Ticket',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: HydrantTestWorkOrder1QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<HydrantTestWorkOrder1Ticket>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<HydrantTestWorkOrder1Ticket[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<HydrantTestWorkOrder1Ticket> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
