/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: SmsNotificationTemplate3
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
import { SmsNotificationTemplate3Message } from '../entities/sms-notification-template3-message.entity';
import { CreateSmsNotificationTemplate3Dto, UpdateSmsNotificationTemplate3Dto, SmsNotificationTemplate3QueryDto } from '../dto/sms-notification-template3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class SmsNotificationTemplate3Service {
  private readonly logger = new Logger(SmsNotificationTemplate3Service.name);

  constructor(
    @InjectRepository(SmsNotificationTemplate3Message)
    private readonly repository: Repository<SmsNotificationTemplate3Message>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateSmsNotificationTemplate3Dto, actorId: string): Promise<SmsNotificationTemplate3Message> {
    this.logger.log(`Creating SmsNotificationTemplate3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<SmsNotificationTemplate3Message>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'SmsNotificationTemplate3.created',
      actorId,
      resourceType: 'SmsNotificationTemplate3Message',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('smsnotificationtemplate3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: SmsNotificationTemplate3QueryDto): Promise<PaginatedResult<SmsNotificationTemplate3Message>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<SmsNotificationTemplate3Message> = {};
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

  async findById(id: string): Promise<SmsNotificationTemplate3Message> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<SmsNotificationTemplate3Message> });
    if (!entity) {
      throw new NotFoundException(`SmsNotificationTemplate3Message ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateSmsNotificationTemplate3Dto, actorId: string): Promise<SmsNotificationTemplate3Message> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'SmsNotificationTemplate3.updated',
      actorId,
      resourceType: 'SmsNotificationTemplate3Message',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('smsnotificationtemplate3.updated', {
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
      action: 'SmsNotificationTemplate3.deleted',
      actorId,
      resourceType: 'SmsNotificationTemplate3Message',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('smsnotificationtemplate3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateSmsNotificationTemplate3Dto[], actorId: string): Promise<SmsNotificationTemplate3Message[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<SmsNotificationTemplate3Message>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'SmsNotificationTemplate3.bulk_created',
      actorId,
      resourceType: 'SmsNotificationTemplate3Message',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: SmsNotificationTemplate3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<SmsNotificationTemplate3Message>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<SmsNotificationTemplate3Message[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<SmsNotificationTemplate3Message> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
