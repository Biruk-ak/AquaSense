/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: FireServiceMeterBatch3
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
import { FireServiceMeterBatch3Reading } from '../entities/fire-service-meter-batch3-reading.entity';
import { CreateFireServiceMeterBatch3Dto, UpdateFireServiceMeterBatch3Dto, FireServiceMeterBatch3QueryDto } from '../dto/fire-service-meter-batch3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class FireServiceMeterBatch3Service {
  private readonly logger = new Logger(FireServiceMeterBatch3Service.name);

  constructor(
    @InjectRepository(FireServiceMeterBatch3Reading)
    private readonly repository: Repository<FireServiceMeterBatch3Reading>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateFireServiceMeterBatch3Dto, actorId: string): Promise<FireServiceMeterBatch3Reading> {
    this.logger.log(`Creating FireServiceMeterBatch3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<FireServiceMeterBatch3Reading>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'FireServiceMeterBatch3.created',
      actorId,
      resourceType: 'FireServiceMeterBatch3Reading',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('fireservicemeterbatch3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: FireServiceMeterBatch3QueryDto): Promise<PaginatedResult<FireServiceMeterBatch3Reading>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<FireServiceMeterBatch3Reading> = {};
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

  async findById(id: string): Promise<FireServiceMeterBatch3Reading> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<FireServiceMeterBatch3Reading> });
    if (!entity) {
      throw new NotFoundException(`FireServiceMeterBatch3Reading ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateFireServiceMeterBatch3Dto, actorId: string): Promise<FireServiceMeterBatch3Reading> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'FireServiceMeterBatch3.updated',
      actorId,
      resourceType: 'FireServiceMeterBatch3Reading',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('fireservicemeterbatch3.updated', {
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
      action: 'FireServiceMeterBatch3.deleted',
      actorId,
      resourceType: 'FireServiceMeterBatch3Reading',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('fireservicemeterbatch3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateFireServiceMeterBatch3Dto[], actorId: string): Promise<FireServiceMeterBatch3Reading[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<FireServiceMeterBatch3Reading>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'FireServiceMeterBatch3.bulk_created',
      actorId,
      resourceType: 'FireServiceMeterBatch3Reading',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: FireServiceMeterBatch3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<FireServiceMeterBatch3Reading>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<FireServiceMeterBatch3Reading[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<FireServiceMeterBatch3Reading> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
