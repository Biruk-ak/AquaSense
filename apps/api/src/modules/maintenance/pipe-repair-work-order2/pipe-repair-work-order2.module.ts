/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PipeRepairWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipeRepairWorkOrder2Ticket } from './entities/pipe-repair-work-order2-ticket.entity';
import { PipeRepairWorkOrder2Service } from './services/pipe-repair-work-order2.service';
import { PipeRepairWorkOrder2Controller } from './controllers/pipe-repair-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PipeRepairWorkOrder2Ticket])],
  controllers: [PipeRepairWorkOrder2Controller],
  providers: [PipeRepairWorkOrder2Service],
  exports: [PipeRepairWorkOrder2Service],
})
export class PipeRepairWorkOrder2Module {}
