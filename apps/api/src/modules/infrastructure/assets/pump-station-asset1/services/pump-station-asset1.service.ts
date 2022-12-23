/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: PumpStationAsset1
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
import { PumpStationAsset1Record } from '../entities/pump-station-asset1-record.entity';
import { CreatePumpStationAsset1Dto, UpdatePumpStationAsset1Dto, PumpStationAsset1QueryDto } from '../dto/pump-station-asset1.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class PumpStationAsset1Service {
  private readonly logger = new Logger(PumpStationAsset1Service.name);

  constructor(
    @InjectRepository(PumpStationAsset1Record)
    private readonly repository: Repository<PumpStationAsset1Record>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreatePumpStationAsset1Dto, actorId: string): Promise<PumpStationAsset1Record> {
    this.logger.log(`Creating PumpStationAsset1 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<PumpStationAsset1Record>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'PumpStationAsset1.created',
      actorId,
      resourceType: 'PumpStationAsset1Record',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('pumpstationasset1.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: PumpStationAsset1QueryDto): Promise<PaginatedResult<PumpStationAsset1Record>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<PumpStationAsset1Record> = {};
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

  async findById(id: string): Promise<PumpStationAsset1Record> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<PumpStationAsset1Record> });
    if (!entity) {
      throw new NotFoundException(`PumpStationAsset1Record ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdatePumpStationAsset1Dto, actorId: string): Promise<PumpStationAsset1Record> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'PumpStationAsset1.updated',
      actorId,
      resourceType: 'PumpStationAsset1Record',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('pumpstationasset1.updated', {
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
      action: 'PumpStationAsset1.deleted',
      actorId,
      resourceType: 'PumpStationAsset1Record',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('pumpstationasset1.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreatePumpStationAsset1Dto[], actorId: string): Promise<PumpStationAsset1Record[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<PumpStationAsset1Record>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'PumpStationAsset1.bulk_created',
      actorId,
      resourceType: 'PumpStationAsset1Record',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: PumpStationAsset1QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<PumpStationAsset1Record>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<PumpStationAsset1Record[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<PumpStationAsset1Record> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
