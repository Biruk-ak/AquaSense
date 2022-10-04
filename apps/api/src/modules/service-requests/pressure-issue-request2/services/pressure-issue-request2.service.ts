/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: PressureIssueRequest2
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
import { PressureIssueRequest2Case } from '../entities/pressure-issue-request2-case.entity';
import { CreatePressureIssueRequest2Dto, UpdatePressureIssueRequest2Dto, PressureIssueRequest2QueryDto } from '../dto/pressure-issue-request2.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class PressureIssueRequest2Service {
  private readonly logger = new Logger(PressureIssueRequest2Service.name);

  constructor(
    @InjectRepository(PressureIssueRequest2Case)
    private readonly repository: Repository<PressureIssueRequest2Case>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreatePressureIssueRequest2Dto, actorId: string): Promise<PressureIssueRequest2Case> {
    this.logger.log(`Creating PressureIssueRequest2 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<PressureIssueRequest2Case>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'PressureIssueRequest2.created',
      actorId,
      resourceType: 'PressureIssueRequest2Case',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('pressureissuerequest2.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: PressureIssueRequest2QueryDto): Promise<PaginatedResult<PressureIssueRequest2Case>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<PressureIssueRequest2Case> = {};
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

  async findById(id: string): Promise<PressureIssueRequest2Case> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<PressureIssueRequest2Case> });
    if (!entity) {
      throw new NotFoundException(`PressureIssueRequest2Case ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdatePressureIssueRequest2Dto, actorId: string): Promise<PressureIssueRequest2Case> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'PressureIssueRequest2.updated',
      actorId,
      resourceType: 'PressureIssueRequest2Case',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('pressureissuerequest2.updated', {
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
      action: 'PressureIssueRequest2.deleted',
      actorId,
      resourceType: 'PressureIssueRequest2Case',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('pressureissuerequest2.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreatePressureIssueRequest2Dto[], actorId: string): Promise<PressureIssueRequest2Case[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<PressureIssueRequest2Case>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'PressureIssueRequest2.bulk_created',
      actorId,
      resourceType: 'PressureIssueRequest2Case',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: PressureIssueRequest2QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<PressureIssueRequest2Case>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<PressureIssueRequest2Case[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<PressureIssueRequest2Case> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
