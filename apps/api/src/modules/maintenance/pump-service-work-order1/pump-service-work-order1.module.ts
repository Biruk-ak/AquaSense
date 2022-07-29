/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PumpServiceWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpServiceWorkOrder1Ticket } from './entities/pump-service-work-order1-ticket.entity';
import { PumpServiceWorkOrder1Service } from './services/pump-service-work-order1.service';
import { PumpServiceWorkOrder1Controller } from './controllers/pump-service-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PumpServiceWorkOrder1Ticket])],
  controllers: [PumpServiceWorkOrder1Controller],
  providers: [PumpServiceWorkOrder1Service],
  exports: [PumpServiceWorkOrder1Service],
})
export class PumpServiceWorkOrder1Module {}
