/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: InAppNotificationTemplate3
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
import { InAppNotificationTemplate3Message } from '../entities/in-app-notification-template3-message.entity';
import { CreateInAppNotificationTemplate3Dto, UpdateInAppNotificationTemplate3Dto, InAppNotificationTemplate3QueryDto } from '../dto/in-app-notification-template3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class InAppNotificationTemplate3Service {
  private readonly logger = new Logger(InAppNotificationTemplate3Service.name);

  constructor(
    @InjectRepository(InAppNotificationTemplate3Message)
    private readonly repository: Repository<InAppNotificationTemplate3Message>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateInAppNotificationTemplate3Dto, actorId: string): Promise<InAppNotificationTemplate3Message> {
    this.logger.log(`Creating InAppNotificationTemplate3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<InAppNotificationTemplate3Message>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'InAppNotificationTemplate3.created',
      actorId,
      resourceType: 'InAppNotificationTemplate3Message',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('inappnotificationtemplate3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: InAppNotificationTemplate3QueryDto): Promise<PaginatedResult<InAppNotificationTemplate3Message>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<InAppNotificationTemplate3Message> = {};
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

  async findById(id: string): Promise<InAppNotificationTemplate3Message> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<InAppNotificationTemplate3Message> });
    if (!entity) {
      throw new NotFoundException(`InAppNotificationTemplate3Message ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateInAppNotificationTemplate3Dto, actorId: string): Promise<InAppNotificationTemplate3Message> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'InAppNotificationTemplate3.updated',
      actorId,
      resourceType: 'InAppNotificationTemplate3Message',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('inappnotificationtemplate3.updated', {
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
      action: 'InAppNotificationTemplate3.deleted',
      actorId,
      resourceType: 'InAppNotificationTemplate3Message',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('inappnotificationtemplate3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateInAppNotificationTemplate3Dto[], actorId: string): Promise<InAppNotificationTemplate3Message[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<InAppNotificationTemplate3Message>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'InAppNotificationTemplate3.bulk_created',
      actorId,
      resourceType: 'InAppNotificationTemplate3Message',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: InAppNotificationTemplate3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<InAppNotificationTemplate3Message>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<InAppNotificationTemplate3Message[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<InAppNotificationTemplate3Message> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
