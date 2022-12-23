/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: CopperPipeSegment1
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
import { CopperPipeSegment1Asset } from '../entities/copper-pipe-segment1-asset.entity';
import { CreateCopperPipeSegment1Dto, UpdateCopperPipeSegment1Dto, CopperPipeSegment1QueryDto } from '../dto/copper-pipe-segment1.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class CopperPipeSegment1Service {
  private readonly logger = new Logger(CopperPipeSegment1Service.name);

  constructor(
    @InjectRepository(CopperPipeSegment1Asset)
    private readonly repository: Repository<CopperPipeSegment1Asset>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateCopperPipeSegment1Dto, actorId: string): Promise<CopperPipeSegment1Asset> {
    this.logger.log(`Creating CopperPipeSegment1 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<CopperPipeSegment1Asset>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'CopperPipeSegment1.created',
      actorId,
      resourceType: 'CopperPipeSegment1Asset',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('copperpipesegment1.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: CopperPipeSegment1QueryDto): Promise<PaginatedResult<CopperPipeSegment1Asset>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<CopperPipeSegment1Asset> = {};
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

  async findById(id: string): Promise<CopperPipeSegment1Asset> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<CopperPipeSegment1Asset> });
    if (!entity) {
      throw new NotFoundException(`CopperPipeSegment1Asset ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateCopperPipeSegment1Dto, actorId: string): Promise<CopperPipeSegment1Asset> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'CopperPipeSegment1.updated',
      actorId,
      resourceType: 'CopperPipeSegment1Asset',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('copperpipesegment1.updated', {
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
      action: 'CopperPipeSegment1.deleted',
      actorId,
      resourceType: 'CopperPipeSegment1Asset',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('copperpipesegment1.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateCopperPipeSegment1Dto[], actorId: string): Promise<CopperPipeSegment1Asset[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<CopperPipeSegment1Asset>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'CopperPipeSegment1.bulk_created',
      actorId,
      resourceType: 'CopperPipeSegment1Asset',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: CopperPipeSegment1QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<CopperPipeSegment1Asset>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<CopperPipeSegment1Asset[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<CopperPipeSegment1Asset> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
