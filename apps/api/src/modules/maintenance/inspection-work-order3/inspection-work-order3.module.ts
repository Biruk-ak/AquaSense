/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InspectionWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionWorkOrder3Ticket } from './entities/inspection-work-order3-ticket.entity';
import { InspectionWorkOrder3Service } from './services/inspection-work-order3.service';
import { InspectionWorkOrder3Controller } from './controllers/inspection-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionWorkOrder3Ticket])],
  controllers: [InspectionWorkOrder3Controller],
  providers: [InspectionWorkOrder3Service],
  exports: [InspectionWorkOrder3Service],
})
export class InspectionWorkOrder3Module {}
