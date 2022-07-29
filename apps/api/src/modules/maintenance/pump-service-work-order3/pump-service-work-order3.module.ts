/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PumpServiceWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpServiceWorkOrder3Ticket } from './entities/pump-service-work-order3-ticket.entity';
import { PumpServiceWorkOrder3Service } from './services/pump-service-work-order3.service';
import { PumpServiceWorkOrder3Controller } from './controllers/pump-service-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PumpServiceWorkOrder3Ticket])],
  controllers: [PumpServiceWorkOrder3Controller],
  providers: [PumpServiceWorkOrder3Service],
  exports: [PumpServiceWorkOrder3Service],
})
export class PumpServiceWorkOrder3Module {}
