/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Service: ConcretePipeSegment3
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
import { ConcretePipeSegment3Asset } from '../entities/concrete-pipe-segment3-asset.entity';
import { CreateConcretePipeSegment3Dto, UpdateConcretePipeSegment3Dto, ConcretePipeSegment3QueryDto } from '../dto/concrete-pipe-segment3.dto';
import { PaginatedResult, AuditService, EventBusService } from '@aquasense/common';

@Injectable()
export class ConcretePipeSegment3Service {
  private readonly logger = new Logger(ConcretePipeSegment3Service.name);

  constructor(
    @InjectRepository(ConcretePipeSegment3Asset)
    private readonly repository: Repository<ConcretePipeSegment3Asset>,
    private readonly auditService: AuditService,
    private readonly eventBus: EventBusService,
  ) {}

  async create(dto: CreateConcretePipeSegment3Dto, actorId: string): Promise<ConcretePipeSegment3Asset> {
    this.logger.log(`Creating ConcretePipeSegment3 by actor=${actorId}`);
    const entity = this.repository.create(dto as Partial<ConcretePipeSegment3Asset>);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'ConcretePipeSegment3.created',
      actorId,
      resourceType: 'ConcretePipeSegment3Asset',
      resourceId: saved.id,
      payload: saved.toPublicView(),
    });
    await this.eventBus.publish('concretepipesegment3.created', {
      id: saved.id,
      actorId,
      timestamp: new Date().toISOString(),
    });
    return saved;
  }

  async findAll(query: ConcretePipeSegment3QueryDto): Promise<PaginatedResult<ConcretePipeSegment3Asset>> {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 25, 100);
    const where: FindOptionsWhere<ConcretePipeSegment3Asset> = {};
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

  async findById(id: string): Promise<ConcretePipeSegment3Asset> {
    const entity = await this.repository.findOne({ where: { id } as FindOptionsWhere<ConcretePipeSegment3Asset> });
    if (!entity) {
      throw new NotFoundException(`ConcretePipeSegment3Asset ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateConcretePipeSegment3Dto, actorId: string): Promise<ConcretePipeSegment3Asset> {
    const entity = await this.findById(id);
    Object.assign(entity, dto);
    const errors = entity.validateInvariants();
    if (errors.length) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
    const saved = await this.repository.save(entity);
    await this.auditService.record({
      action: 'ConcretePipeSegment3.updated',
      actorId,
      resourceType: 'ConcretePipeSegment3Asset',
      resourceId: saved.id,
      payload: { changes: dto },
    });
    await this.eventBus.publish('concretepipesegment3.updated', {
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
      action: 'ConcretePipeSegment3.deleted',
      actorId,
      resourceType: 'ConcretePipeSegment3Asset',
      resourceId: id,
      payload: {},
    });
    await this.eventBus.publish('concretepipesegment3.deleted', {
      id,
      actorId,
      timestamp: new Date().toISOString(),
    });
  }

  async bulkCreate(items: CreateConcretePipeSegment3Dto[], actorId: string): Promise<ConcretePipeSegment3Asset[]> {
    if (!items.length) {
      throw new BadRequestException('No items provided for bulk create');
    }
    if (items.length > 500) {
      throw new BadRequestException('Bulk create limited to 500 items');
    }
    const entities = items.map((dto) => this.repository.create(dto as Partial<ConcretePipeSegment3Asset>));
    const saved = await this.repository.save(entities);
    await this.auditService.record({
      action: 'ConcretePipeSegment3.bulk_created',
      actorId,
      resourceType: 'ConcretePipeSegment3Asset',
      resourceId: 'bulk',
      payload: { count: saved.length },
    });
    return saved;
  }

  async exportCsv(query: ConcretePipeSegment3QueryDto): Promise<string> {
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
      where: { createdAt: Between(from, to) } as FindOptionsWhere<ConcretePipeSegment3Asset>,
    });
    const periodDays = Math.max(1, Math.ceil((to.getTime() - from.getTime()) / 86400000));
    return {
      total: items.length,
      periodDays,
      averagePerDay: items.length / periodDays,
    };
  }

  async searchByText(term: string, limit = 50): Promise<ConcretePipeSegment3Asset[]> {
    if (!term || term.trim().length < 2) {
      throw new BadRequestException('Search term must be at least 2 characters');
    }
    return this.repository.find({
      take: limit,
      order: { updatedAt: 'DESC' },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.repository.count({ where: { id } as FindOptionsWhere<ConcretePipeSegment3Asset> });
    return count > 0;
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }
}
