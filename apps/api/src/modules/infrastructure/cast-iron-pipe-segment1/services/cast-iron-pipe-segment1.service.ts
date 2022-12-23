/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: CastIronPipeSegment1
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
import { CastIronPipeSegment1Asset } from '../entities/cast-iron-pipe-segment1-asset.entity';
import { CreateCastIronPipeSegment1Dto, UpdateCastIronPipeSegment1Dto, CastIronPipeSegment1QueryDto } from '../dto/cast-iron-pipe-segment1.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class CastIronPipeSegment1Service {
  private readonly logger = new Logger(CastIronPipeSegment1Service.name);

  constructor(
    @InjectRepository(CastIronPipeSegment1Asset)
    private readonly repository: Repository<CastIronPipeSegment1Asset>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateCastIronPipeSegment1Dto, actorId: string): Promise<CastIronPipeSegment1Asset> {
    this.logger.log(`Creating CastIronPipeSegment1 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<CastIronPipeSegment1Asset>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'CastIronPipeSegment1.created',
      actorId,
      resourceType: 'CastIronPipeSegment1Asset',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('castironpipesegment1.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: CastIronPipeSegment1QueryDto): Promise<PaginatedResult<CastIronPipeSegment1Asset>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<CastIronPipeSegment1Asset> = {};
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

  async findById(id: string): Promise<CastIronPipeSegment1Asset> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<CastIronPipeSegment1Asset> });
    if (!entity) {
      throw new NotFoundException(`CastIronPipeSegment1Asset ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateCastIronPipeSegment1Dto, actorId: string): Promise<CastIronPipeSegment1Asset> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'CastIronPipeSegment1.updated',
      actorId,
      resourceType: 'CastIronPipeSegment1Asset',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('castironpipesegment1.updated', {
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
      action: 'CastIronPipeSegment1.deleted',
      actorId,
      resourceType: 'CastIronPipeSegment1Asset',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('castironpipesegment1.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateCastIronPipeSegment1Dto[], actorId: string): Promise<CastIronPipeSegment1Asset[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<CastIronPipeSegment1Asset>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'CastIronPipeSegment1.bulk_created',
      actorId,
      resourceType: 'CastIronPipeSegment1Asset',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: CastIronPipeSegment1QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<CastIronPipeSegment1Asset>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<CastIronPipeSegment1Asset[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<CastIronPipeSegment1Asset> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
