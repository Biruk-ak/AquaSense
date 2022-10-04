/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: LowPressureRequest2
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
import { LowPressureRequest2Case } from '../entities/low-pressure-request2-case.entity';
import { CreateLowPressureRequest2Dto, UpdateLowPressureRequest2Dto, LowPressureRequest2QueryDto } from '../dto/low-pressure-request2.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class LowPressureRequest2Service {
  private readonly logger = new Logger(LowPressureRequest2Service.name);

  constructor(
    @InjectRepository(LowPressureRequest2Case)
    private readonly repository: Repository<LowPressureRequest2Case>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateLowPressureRequest2Dto, actorId: string): Promise<LowPressureRequest2Case> {
    this.logger.log(`Creating LowPressureRequest2 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<LowPressureRequest2Case>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LowPressureRequest2.created',
      actorId,
      resourceType: 'LowPressureRequest2Case',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('lowpressurerequest2.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: LowPressureRequest2QueryDto): Promise<PaginatedResult<LowPressureRequest2Case>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<LowPressureRequest2Case> = {};
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

  async findById(id: string): Promise<LowPressureRequest2Case> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<LowPressureRequest2Case> });
    if (!entity) {
      throw new NotFoundException(`LowPressureRequest2Case ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateLowPressureRequest2Dto, actorId: string): Promise<LowPressureRequest2Case> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LowPressureRequest2.updated',
      actorId,
      resourceType: 'LowPressureRequest2Case',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('lowpressurerequest2.updated', {
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
      action: 'LowPressureRequest2.deleted',
      actorId,
      resourceType: 'LowPressureRequest2Case',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('lowpressurerequest2.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateLowPressureRequest2Dto[], actorId: string): Promise<LowPressureRequest2Case[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<LowPressureRequest2Case>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'LowPressureRequest2.bulk_created',
      actorId,
      resourceType: 'LowPressureRequest2Case',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: LowPressureRequest2QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<LowPressureRequest2Case>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<LowPressureRequest2Case[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<LowPressureRequest2Case> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
