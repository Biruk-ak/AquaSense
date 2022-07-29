/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HydrantTestWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HydrantTestWorkOrder2Ticket } from './entities/hydrant-test-work-order2-ticket.entity';
import { HydrantTestWorkOrder2Service } from './services/hydrant-test-work-order2.service';
import { HydrantTestWorkOrder2Controller } from './controllers/hydrant-test-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HydrantTestWorkOrder2Ticket])],
  controllers: [HydrantTestWorkOrder2Controller],
  providers: [HydrantTestWorkOrder2Service],
  exports: [HydrantTestWorkOrder2Service],
})
export class HydrantTestWorkOrder2Module {}
