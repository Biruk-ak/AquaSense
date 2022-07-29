/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HydrantTestWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HydrantTestWorkOrder3Ticket } from './entities/hydrant-test-work-order3-ticket.entity';
import { HydrantTestWorkOrder3Service } from './services/hydrant-test-work-order3.service';
import { HydrantTestWorkOrder3Controller } from './controllers/hydrant-test-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HydrantTestWorkOrder3Ticket])],
  controllers: [HydrantTestWorkOrder3Controller],
  providers: [HydrantTestWorkOrder3Service],
  exports: [HydrantTestWorkOrder3Service],
})
export class HydrantTestWorkOrder3Module {}
