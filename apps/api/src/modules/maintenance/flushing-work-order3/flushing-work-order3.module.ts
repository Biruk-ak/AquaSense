/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FlushingWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlushingWorkOrder3Ticket } from './entities/flushing-work-order3-ticket.entity';
import { FlushingWorkOrder3Service } from './services/flushing-work-order3.service';
import { FlushingWorkOrder3Controller } from './controllers/flushing-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FlushingWorkOrder3Ticket])],
  controllers: [FlushingWorkOrder3Controller],
  providers: [FlushingWorkOrder3Service],
  exports: [FlushingWorkOrder3Service],
})
export class FlushingWorkOrder3Module {}
