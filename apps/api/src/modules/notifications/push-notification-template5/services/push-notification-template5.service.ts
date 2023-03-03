/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: PushNotificationTemplate5
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
import { PushNotificationTemplate5Message } from '../entities/push-notification-template5-message.entity';
import { CreatePushNotificationTemplate5Dto, UpdatePushNotificationTemplate5Dto, PushNotificationTemplate5QueryDto } from '../dto/push-notification-template5.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class PushNotificationTemplate5Service {
  private readonly logger = new Logger(PushNotificationTemplate5Service.name);

  constructor(
    @InjectRepository(PushNotificationTemplate5Message)
    private readonly repository: Repository<PushNotificationTemplate5Message>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreatePushNotificationTemplate5Dto, actorId: string): Promise<PushNotificationTemplate5Message> {
    this.logger.log(`Creating PushNotificationTemplate5 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<PushNotificationTemplate5Message>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'PushNotificationTemplate5.created',
      actorId,
      resourceType: 'PushNotificationTemplate5Message',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('pushnotificationtemplate5.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: PushNotificationTemplate5QueryDto): Promise<PaginatedResult<PushNotificationTemplate5Message>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<PushNotificationTemplate5Message> = {};
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

  async findById(id: string): Promise<PushNotificationTemplate5Message> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<PushNotificationTemplate5Message> });
    if (!entity) {
      throw new NotFoundException(`PushNotificationTemplate5Message ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdatePushNotificationTemplate5Dto, actorId: string): Promise<PushNotificationTemplate5Message> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'PushNotificationTemplate5.updated',
      actorId,
      resourceType: 'PushNotificationTemplate5Message',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('pushnotificationtemplate5.updated', {
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
      action: 'PushNotificationTemplate5.deleted',
      actorId,
      resourceType: 'PushNotificationTemplate5Message',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('pushnotificationtemplate5.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreatePushNotificationTemplate5Dto[], actorId: string): Promise<PushNotificationTemplate5Message[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<PushNotificationTemplate5Message>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'PushNotificationTemplate5.bulk_created',
      actorId,
      resourceType: 'PushNotificationTemplate5Message',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: PushNotificationTemplate5QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<PushNotificationTemplate5Message>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<PushNotificationTemplate5Message[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<PushNotificationTemplate5Message> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
