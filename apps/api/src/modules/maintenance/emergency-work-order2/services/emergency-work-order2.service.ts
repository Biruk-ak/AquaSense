/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: EmergencyWorkOrder2
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
import { EmergencyWorkOrder2Ticket } from '../entities/emergency-work-order2-ticket.entity';
import { CreateEmergencyWorkOrder2Dto, UpdateEmergencyWorkOrder2Dto, EmergencyWorkOrder2QueryDto } from '../dto/emergency-work-order2.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class EmergencyWorkOrder2Service {
  private readonly logger = new Logger(EmergencyWorkOrder2Service.name);

  constructor(
    @InjectRepository(EmergencyWorkOrder2Ticket)
    private readonly repository: Repository<EmergencyWorkOrder2Ticket>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateEmergencyWorkOrder2Dto, actorId: string): Promise<EmergencyWorkOrder2Ticket> {
    this.logger.log(`Creating EmergencyWorkOrder2 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<EmergencyWorkOrder2Ticket>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'EmergencyWorkOrder2.created',
      actorId,
      resourceType: 'EmergencyWorkOrder2Ticket',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('emergencyworkorder2.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: EmergencyWorkOrder2QueryDto): Promise<PaginatedResult<EmergencyWorkOrder2Ticket>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<EmergencyWorkOrder2Ticket> = {};
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

  async findById(id: string): Promise<EmergencyWorkOrder2Ticket> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<EmergencyWorkOrder2Ticket> });
    if (!entity) {
      throw new NotFoundException(`EmergencyWorkOrder2Ticket ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateEmergencyWorkOrder2Dto, actorId: string): Promise<EmergencyWorkOrder2Ticket> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'EmergencyWorkOrder2.updated',
      actorId,
      resourceType: 'EmergencyWorkOrder2Ticket',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('emergencyworkorder2.updated', {
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
      action: 'EmergencyWorkOrder2.deleted',
      actorId,
      resourceType: 'EmergencyWorkOrder2Ticket',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('emergencyworkorder2.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateEmergencyWorkOrder2Dto[], actorId: string): Promise<EmergencyWorkOrder2Ticket[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<EmergencyWorkOrder2Ticket>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'EmergencyWorkOrder2.bulk_created',
      actorId,
      resourceType: 'EmergencyWorkOrder2Ticket',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: EmergencyWorkOrder2QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<EmergencyWorkOrder2Ticket>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<EmergencyWorkOrder2Ticket[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<EmergencyWorkOrder2Ticket> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
