/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InspectionWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionWorkOrder1Ticket } from './entities/inspection-work-order1-ticket.entity';
import { InspectionWorkOrder1Service } from './services/inspection-work-order1.service';
import { InspectionWorkOrder1Controller } from './controllers/inspection-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionWorkOrder1Ticket])],
  controllers: [InspectionWorkOrder1Controller],
  providers: [InspectionWorkOrder1Service],
  exports: [InspectionWorkOrder1Service],
})
export class InspectionWorkOrder1Module {}
