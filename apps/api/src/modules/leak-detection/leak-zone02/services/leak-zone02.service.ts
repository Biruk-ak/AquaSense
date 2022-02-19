/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: LeakZone02
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
import { LeakZone02Alert } from '../entities/leak-zone02-alert.entity';
import { CreateLeakZone02Dto, UpdateLeakZone02Dto, LeakZone02QueryDto } from '../dto/leak-zone02.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class LeakZone02Service {
  private readonly logger = new Logger(LeakZone02Service.name);

  constructor(
    @InjectRepository(LeakZone02Alert)
    private readonly repository: Repository<LeakZone02Alert>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateLeakZone02Dto, actorId: string): Promise<LeakZone02Alert> {
    this.logger.log(`Creating LeakZone02 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<LeakZone02Alert>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakZone02.created',
      actorId,
      resourceType: 'LeakZone02Alert',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('leakzone02.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: LeakZone02QueryDto): Promise<PaginatedResult<LeakZone02Alert>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<LeakZone02Alert> = {};
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

  async findById(id: string): Promise<LeakZone02Alert> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<LeakZone02Alert> });
    if (!entity) {
      throw new NotFoundException(`LeakZone02Alert ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateLeakZone02Dto, actorId: string): Promise<LeakZone02Alert> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakZone02.updated',
      actorId,
      resourceType: 'LeakZone02Alert',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('leakzone02.updated', {
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
      action: 'LeakZone02.deleted',
      actorId,
      resourceType: 'LeakZone02Alert',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('leakzone02.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateLeakZone02Dto[], actorId: string): Promise<LeakZone02Alert[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<LeakZone02Alert>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'LeakZone02.bulk_created',
      actorId,
      resourceType: 'LeakZone02Alert',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: LeakZone02QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<LeakZone02Alert>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<LeakZone02Alert[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<LeakZone02Alert> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
