/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: MunicipalMeterBatch4
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
import { MunicipalMeterBatch4Reading } from '../entities/municipal-meter-batch4-reading.entity';
import { CreateMunicipalMeterBatch4Dto, UpdateMunicipalMeterBatch4Dto, MunicipalMeterBatch4QueryDto } from '../dto/municipal-meter-batch4.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class MunicipalMeterBatch4Service {
  private readonly logger = new Logger(MunicipalMeterBatch4Service.name);

  constructor(
    @InjectRepository(MunicipalMeterBatch4Reading)
    private readonly repository: Repository<MunicipalMeterBatch4Reading>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateMunicipalMeterBatch4Dto, actorId: string): Promise<MunicipalMeterBatch4Reading> {
    this.logger.log(`Creating MunicipalMeterBatch4 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<MunicipalMeterBatch4Reading>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MunicipalMeterBatch4.created',
      actorId,
      resourceType: 'MunicipalMeterBatch4Reading',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('municipalmeterbatch4.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: MunicipalMeterBatch4QueryDto): Promise<PaginatedResult<MunicipalMeterBatch4Reading>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<MunicipalMeterBatch4Reading> = {};
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

  async findById(id: string): Promise<MunicipalMeterBatch4Reading> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<MunicipalMeterBatch4Reading> });
    if (!entity) {
      throw new NotFoundException(`MunicipalMeterBatch4Reading ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateMunicipalMeterBatch4Dto, actorId: string): Promise<MunicipalMeterBatch4Reading> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MunicipalMeterBatch4.updated',
      actorId,
      resourceType: 'MunicipalMeterBatch4Reading',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('municipalmeterbatch4.updated', {
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
      action: 'MunicipalMeterBatch4.deleted',
      actorId,
      resourceType: 'MunicipalMeterBatch4Reading',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('municipalmeterbatch4.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateMunicipalMeterBatch4Dto[], actorId: string): Promise<MunicipalMeterBatch4Reading[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<MunicipalMeterBatch4Reading>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'MunicipalMeterBatch4.bulk_created',
      actorId,
      resourceType: 'MunicipalMeterBatch4Reading',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: MunicipalMeterBatch4QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<MunicipalMeterBatch4Reading>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<MunicipalMeterBatch4Reading[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<MunicipalMeterBatch4Reading> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
