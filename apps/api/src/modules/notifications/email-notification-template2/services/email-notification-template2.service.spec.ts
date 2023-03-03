/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Unit tests: EmailNotificationTemplate2
 * @copyright Biruk-ak
 */

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { EmailNotificationTemplate2Service } from './email-notification-template2.service';
import { EmailNotificationTemplate2Message } from '../entities/email-notification-template2-message.entity';
import { AuditService, EventBusService } from '@aquasense/common';

describe('EmailNotificationTemplate2Service', () => {
  let service: EmailNotificationTemplate2Service;
  const repo = {
    create: jest.fn((x) => Object.assign(new EmailNotificationTemplate2Message(), x, {
      validateInvariants: () => [],
      toPublicView: () => ({ ...x }),
      id: 'test-id-001',
    })),
    save: jest.fn(async (x) => (Array.isArray(x) ? x : { ...x, id: x.id || 'test-id-001' })),
    findAndCount: jest.fn(async () => [[], 0]),
    findOne: jest.fn(),
    find: jest.fn(async () => []),
    remove: jest.fn(async () => undefined),
    count: jest.fn(async () => 0),
  };
  const audit = { record: jest.fn(async () => undefined) };
  const eventBus = { publish: jest.fn(async () => undefined) };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailNotificationTemplate2Service,
        { provide: getRepositoryToken(EmailNotificationTemplate2Message), useValue: repo },
        { provide: AuditService, useValue: audit },
        { provide: EventBusService, useValue: eventBus },
      ],
    }).compile();
    service = module.get(EmailNotificationTemplate2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a record and audits the action', async () => {
    const result = await service.create({} as any, 'actor-1');
    expect(result).toBeDefined();
    expect(repo.save).toHaveBeenCalled();
    expect(audit.record).toHaveBeenCalledWith(expect.objectContaining({ action: 'EmailNotificationTemplate2.created' }));
    expect(eventBus.publish).toHaveBeenCalled();
  });

  it('rejects create when invariants fail', async () => {
    repo.create.mockReturnValueOnce({
      validateInvariants: () => ['name is required'],
      toPublicView: () => ({}),
    });
    await expect(service.create({} as any, 'actor-1')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('lists records with pagination defaults', async () => {
    repo.findAndCount.mockResolvedValueOnce([[{ id: '1' }], 1]);
    const result = await service.findAll({});
    expect(result.total).toBe(1);
    expect(result.page).toBe(1);
    expect(result.limit).toBe(25);
  });

  it('throws NotFoundException when missing', async () => {
    repo.findOne.mockResolvedValueOnce(null);
    await expect(service.findById('missing')).rejects.toBeInstanceOf(NotFoundException);
  });

  it('updates an existing record', async () => {
    repo.findOne.mockResolvedValueOnce({
      id: '1',
      validateInvariants: () => [],
      toPublicView: () => ({ id: '1' }),
    });
    const updated = await service.update('1', {} as any, 'actor-1');
    expect(updated).toBeDefined();
    expect(audit.record).toHaveBeenCalledWith(expect.objectContaining({ action: 'EmailNotificationTemplate2.updated' }));
  });

  it('removes a record', async () => {
    repo.findOne.mockResolvedValueOnce({ id: '1', validateInvariants: () => [], toPublicView: () => ({}) });
    await service.remove('1', 'actor-1');
    expect(repo.remove).toHaveBeenCalled();
  });

  it('bulk creates with limit enforcement', async () => {
    await expect(service.bulkCreate([], 'actor-1')).rejects.toBeInstanceOf(BadRequestException);
    const many = Array.from({ length: 501 }, () => ({}));
    await expect(service.bulkCreate(many as any, 'actor-1')).rejects.toBeInstanceOf(BadRequestException);
    const ok = await service.bulkCreate([{} as any, {} as any], 'actor-1');
    expect(ok).toHaveLength(2);
  });

  it('exports csv for matching records', async () => {
    repo.findAndCount.mockResolvedValueOnce([
      [{ toPublicView: () => ({ id: '1', name: 'A' }), id: '1' }],
      1,
    ]);
    const csv = await service.exportCsv({});
    expect(csv).toContain('id');
    expect(csv).toContain('A');
  });

  it('computes summary metrics for a date range', async () => {
    repo.find.mockResolvedValueOnce([{ id: '1' }, { id: '2' }]);
    const summary = await service.computeSummary(new Date('2024-01-01'), new Date('2024-01-31'));
    expect(summary.total).toBe(2);
    expect(summary.periodDays).toBeGreaterThan(0);
  });

  it('rejects short search terms', async () => {
    await expect(service.searchByText('a')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('checks existence and counts', async () => {
    repo.count.mockResolvedValueOnce(1);
    expect(await service.exists('1')).toBe(true);
    repo.count.mockResolvedValueOnce(42);
    expect(await service.countAll()).toBe(42);
  });
});
