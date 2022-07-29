/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FlushingWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlushingWorkOrder1Ticket } from './entities/flushing-work-order1-ticket.entity';
import { FlushingWorkOrder1Service } from './services/flushing-work-order1.service';
import { FlushingWorkOrder1Controller } from './controllers/flushing-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FlushingWorkOrder1Ticket])],
  controllers: [FlushingWorkOrder1Controller],
  providers: [FlushingWorkOrder1Service],
  exports: [FlushingWorkOrder1Service],
})
export class FlushingWorkOrder1Module {}
