/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Audit service
 * @copyright Biruk-ak
 */

import { Injectable, Logger } from '@nestjs/common';

export interface AuditRecord {
  action: string;
  actorId: string;
  resourceType: string;
  resourceId: string;
  payload: Record<string, unknown>;
}

@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name);
  private readonly buffer: AuditRecord[] = [];

  async record(entry: AuditRecord): Promise<void> {
    this.buffer.push({ ...entry });
    this.logger.debug(`audit ${entry.action} resource=${entry.resourceType}:${entry.resourceId}`);
  }

  recent(limit = 100): AuditRecord[] {
    return this.buffer.slice(-limit);
  }
}
