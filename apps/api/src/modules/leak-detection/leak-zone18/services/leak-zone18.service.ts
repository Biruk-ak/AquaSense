/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: LeakZone18
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
import { LeakZone18Alert } from '../entities/leak-zone18-alert.entity';
import { CreateLeakZone18Dto, UpdateLeakZone18Dto, LeakZone18QueryDto } from '../dto/leak-zone18.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class LeakZone18Service {
  private readonly logger = new Logger(LeakZone18Service.name);

  constructor(
    @InjectRepository(LeakZone18Alert)
    private readonly repository: Repository<LeakZone18Alert>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateLeakZone18Dto, actorId: string): Promise<LeakZone18Alert> {
    this.logger.log(`Creating LeakZone18 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<LeakZone18Alert>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakZone18.created',
      actorId,
      resourceType: 'LeakZone18Alert',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('leakzone18.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: LeakZone18QueryDto): Promise<PaginatedResult<LeakZone18Alert>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<LeakZone18Alert> = {};
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

  async findById(id: string): Promise<LeakZone18Alert> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<LeakZone18Alert> });
    if (!entity) {
      throw new NotFoundException(`LeakZone18Alert ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateLeakZone18Dto, actorId: string): Promise<LeakZone18Alert> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'LeakZone18.updated',
      actorId,
      resourceType: 'LeakZone18Alert',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('leakzone18.updated', {
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
      action: 'LeakZone18.deleted',
      actorId,
      resourceType: 'LeakZone18Alert',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('leakzone18.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateLeakZone18Dto[], actorId: string): Promise<LeakZone18Alert[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<LeakZone18Alert>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'LeakZone18.bulk_created',
      actorId,
      resourceType: 'LeakZone18Alert',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: LeakZone18QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<LeakZone18Alert>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<LeakZone18Alert[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<LeakZone18Alert> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
