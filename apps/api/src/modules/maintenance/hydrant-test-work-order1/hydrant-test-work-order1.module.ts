/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HydrantTestWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HydrantTestWorkOrder1Ticket } from './entities/hydrant-test-work-order1-ticket.entity';
import { HydrantTestWorkOrder1Service } from './services/hydrant-test-work-order1.service';
import { HydrantTestWorkOrder1Controller } from './controllers/hydrant-test-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HydrantTestWorkOrder1Ticket])],
  controllers: [HydrantTestWorkOrder1Controller],
  providers: [HydrantTestWorkOrder1Service],
  exports: [HydrantTestWorkOrder1Service],
})
export class HydrantTestWorkOrder1Module {}
