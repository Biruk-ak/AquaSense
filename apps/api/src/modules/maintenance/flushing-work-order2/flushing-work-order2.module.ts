/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FlushingWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlushingWorkOrder2Ticket } from './entities/flushing-work-order2-ticket.entity';
import { FlushingWorkOrder2Service } from './services/flushing-work-order2.service';
import { FlushingWorkOrder2Controller } from './controllers/flushing-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FlushingWorkOrder2Ticket])],
  controllers: [FlushingWorkOrder2Controller],
  providers: [FlushingWorkOrder2Service],
  exports: [FlushingWorkOrder2Service],
})
export class FlushingWorkOrder2Module {}
