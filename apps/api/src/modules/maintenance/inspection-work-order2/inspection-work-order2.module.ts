/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InspectionWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionWorkOrder2Ticket } from './entities/inspection-work-order2-ticket.entity';
import { InspectionWorkOrder2Service } from './services/inspection-work-order2.service';
import { InspectionWorkOrder2Controller } from './controllers/inspection-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionWorkOrder2Ticket])],
  controllers: [InspectionWorkOrder2Controller],
  providers: [InspectionWorkOrder2Service],
  exports: [InspectionWorkOrder2Service],
})
export class InspectionWorkOrder2Module {}
