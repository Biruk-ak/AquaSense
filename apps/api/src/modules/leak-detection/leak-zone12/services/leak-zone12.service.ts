/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: LeakZone12
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
import { LeakZone12Alert } from '../entities/leak-zone12-alert.entity';
import { CreateLeakZone12Dto, UpdateLeakZone12Dto, LeakZone12QueryDto } from '../dto/leak-zone12.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class LeakZone12Service {
  private readonly logger = new Logger(LeakZone12Service.name);

  constructor(
    @InjectRepository(LeakZone12Alert)
    private readonly repository: Repository<LeakZone12Alert>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateLeakZone12Dto, actorId: string): Promise<LeakZone12Alert> {
    this.logger.log(`Creating LeakZone12 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<LeakZone12Alert>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakZone12.created',
      actorId,
      resourceType: 'LeakZone12Alert',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('leakzone12.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: LeakZone12QueryDto): Promise<PaginatedResult<LeakZone12Alert>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<LeakZone12Alert> = {};
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

  async findById(id: string): Promise<LeakZone12Alert> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<LeakZone12Alert> });
    if (!entity) {
      throw new NotFoundException(`LeakZone12Alert ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateLeakZone12Dto, actorId: string): Promise<LeakZone12Alert> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakZone12.updated',
      actorId,
      resourceType: 'LeakZone12Alert',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('leakzone12.updated', {
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
      action: 'LeakZone12.deleted',
      actorId,
      resourceType: 'LeakZone12Alert',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('leakzone12.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateLeakZone12Dto[], actorId: string): Promise<LeakZone12Alert[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<LeakZone12Alert>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'LeakZone12.bulk_created',
      actorId,
      resourceType: 'LeakZone12Alert',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: LeakZone12QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<LeakZone12Alert>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<LeakZone12Alert[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<LeakZone12Alert> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
