/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PipeRepairWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipeRepairWorkOrder1Ticket } from './entities/pipe-repair-work-order1-ticket.entity';
import { PipeRepairWorkOrder1Service } from './services/pipe-repair-work-order1.service';
import { PipeRepairWorkOrder1Controller } from './controllers/pipe-repair-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PipeRepairWorkOrder1Ticket])],
  controllers: [PipeRepairWorkOrder1Controller],
  providers: [PipeRepairWorkOrder1Service],
  exports: [PipeRepairWorkOrder1Service],
})
export class PipeRepairWorkOrder1Module {}
