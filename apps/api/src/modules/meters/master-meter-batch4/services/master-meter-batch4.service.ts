/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: MasterMeterBatch4
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
import { MasterMeterBatch4Reading } from '../entities/master-meter-batch4-reading.entity';
import { CreateMasterMeterBatch4Dto, UpdateMasterMeterBatch4Dto, MasterMeterBatch4QueryDto } from '../dto/master-meter-batch4.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class MasterMeterBatch4Service {
  private readonly logger = new Logger(MasterMeterBatch4Service.name);

  constructor(
    @InjectRepository(MasterMeterBatch4Reading)
    private readonly repository: Repository<MasterMeterBatch4Reading>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateMasterMeterBatch4Dto, actorId: string): Promise<MasterMeterBatch4Reading> {
    this.logger.log(`Creating MasterMeterBatch4 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<MasterMeterBatch4Reading>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MasterMeterBatch4.created',
      actorId,
      resourceType: 'MasterMeterBatch4Reading',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('mastermeterbatch4.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: MasterMeterBatch4QueryDto): Promise<PaginatedResult<MasterMeterBatch4Reading>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<MasterMeterBatch4Reading> = {};
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

  async findById(id: string): Promise<MasterMeterBatch4Reading> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<MasterMeterBatch4Reading> });
    if (!entity) {
      throw new NotFoundException(`MasterMeterBatch4Reading ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateMasterMeterBatch4Dto, actorId: string): Promise<MasterMeterBatch4Reading> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MasterMeterBatch4.updated',
      actorId,
      resourceType: 'MasterMeterBatch4Reading',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('mastermeterbatch4.updated', {
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
      action: 'MasterMeterBatch4.deleted',
      actorId,
      resourceType: 'MasterMeterBatch4Reading',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('mastermeterbatch4.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateMasterMeterBatch4Dto[], actorId: string): Promise<MasterMeterBatch4Reading[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<MasterMeterBatch4Reading>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'MasterMeterBatch4.bulk_created',
      actorId,
      resourceType: 'MasterMeterBatch4Reading',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: MasterMeterBatch4QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<MasterMeterBatch4Reading>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<MasterMeterBatch4Reading[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<MasterMeterBatch4Reading> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
