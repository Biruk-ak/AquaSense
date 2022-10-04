/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: MeterReplaceRequest2
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
import { MeterReplaceRequest2Case } from '../entities/meter-replace-request2-case.entity';
import { CreateMeterReplaceRequest2Dto, UpdateMeterReplaceRequest2Dto, MeterReplaceRequest2QueryDto } from '../dto/meter-replace-request2.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class MeterReplaceRequest2Service {
  private readonly logger = new Logger(MeterReplaceRequest2Service.name);

  constructor(
    @InjectRepository(MeterReplaceRequest2Case)
    private readonly repository: Repository<MeterReplaceRequest2Case>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateMeterReplaceRequest2Dto, actorId: string): Promise<MeterReplaceRequest2Case> {
    this.logger.log(`Creating MeterReplaceRequest2 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<MeterReplaceRequest2Case>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MeterReplaceRequest2.created',
      actorId,
      resourceType: 'MeterReplaceRequest2Case',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('meterreplacerequest2.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: MeterReplaceRequest2QueryDto): Promise<PaginatedResult<MeterReplaceRequest2Case>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<MeterReplaceRequest2Case> = {};
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

  async findById(id: string): Promise<MeterReplaceRequest2Case> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<MeterReplaceRequest2Case> });
    if (!entity) {
      throw new NotFoundException(`MeterReplaceRequest2Case ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateMeterReplaceRequest2Dto, actorId: string): Promise<MeterReplaceRequest2Case> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MeterReplaceRequest2.updated',
      actorId,
      resourceType: 'MeterReplaceRequest2Case',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('meterreplacerequest2.updated', {
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
      action: 'MeterReplaceRequest2.deleted',
      actorId,
      resourceType: 'MeterReplaceRequest2Case',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('meterreplacerequest2.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateMeterReplaceRequest2Dto[], actorId: string): Promise<MeterReplaceRequest2Case[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<MeterReplaceRequest2Case>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'MeterReplaceRequest2.bulk_created',
      actorId,
      resourceType: 'MeterReplaceRequest2Case',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: MeterReplaceRequest2QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<MeterReplaceRequest2Case>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<MeterReplaceRequest2Case[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<MeterReplaceRequest2Case> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
