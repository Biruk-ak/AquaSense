/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PipeRepairWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipeRepairWorkOrder3Ticket } from './entities/pipe-repair-work-order3-ticket.entity';
import { PipeRepairWorkOrder3Service } from './services/pipe-repair-work-order3.service';
import { PipeRepairWorkOrder3Controller } from './controllers/pipe-repair-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PipeRepairWorkOrder3Ticket])],
  controllers: [PipeRepairWorkOrder3Controller],
  providers: [PipeRepairWorkOrder3Service],
  exports: [PipeRepairWorkOrder3Service],
})
export class PipeRepairWorkOrder3Module {}
