/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: MasterMeterBatch2
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
import { MasterMeterBatch2Reading } from '../entities/master-meter-batch2-reading.entity';
import { CreateMasterMeterBatch2Dto, UpdateMasterMeterBatch2Dto, MasterMeterBatch2QueryDto } from '../dto/master-meter-batch2.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class MasterMeterBatch2Service {
  private readonly logger = new Logger(MasterMeterBatch2Service.name);

  constructor(
    @InjectRepository(MasterMeterBatch2Reading)
    private readonly repository: Repository<MasterMeterBatch2Reading>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateMasterMeterBatch2Dto, actorId: string): Promise<MasterMeterBatch2Reading> {
    this.logger.log(`Creating MasterMeterBatch2 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<MasterMeterBatch2Reading>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MasterMeterBatch2.created',
      actorId,
      resourceType: 'MasterMeterBatch2Reading',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('mastermeterbatch2.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: MasterMeterBatch2QueryDto): Promise<PaginatedResult<MasterMeterBatch2Reading>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<MasterMeterBatch2Reading> = {};
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

  async findById(id: string): Promise<MasterMeterBatch2Reading> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<MasterMeterBatch2Reading> });
    if (!entity) {
      throw new NotFoundException(`MasterMeterBatch2Reading ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateMasterMeterBatch2Dto, actorId: string): Promise<MasterMeterBatch2Reading> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'MasterMeterBatch2.updated',
      actorId,
      resourceType: 'MasterMeterBatch2Reading',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('mastermeterbatch2.updated', {
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
      action: 'MasterMeterBatch2.deleted',
      actorId,
      resourceType: 'MasterMeterBatch2Reading',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('mastermeterbatch2.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateMasterMeterBatch2Dto[], actorId: string): Promise<MasterMeterBatch2Reading[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<MasterMeterBatch2Reading>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'MasterMeterBatch2.bulk_created',
      actorId,
      resourceType: 'MasterMeterBatch2Reading',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: MasterMeterBatch2QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<MasterMeterBatch2Reading>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<MasterMeterBatch2Reading[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<MasterMeterBatch2Reading> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
