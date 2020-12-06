/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Common module
 * @copyright Biruk-ak
 */

import { Global, Module } from '@nestjs/common';
import { AuditService } from './services/audit.service';
import { EventBusService } from './services/event-bus.service';

@Global()
@Module({
  providers: [AuditService, EventBusService],
  exports: [AuditService, EventBusService],
})
export class CommonModule {}
