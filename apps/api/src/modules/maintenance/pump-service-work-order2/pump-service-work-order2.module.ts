/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PumpServiceWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpServiceWorkOrder2Ticket } from './entities/pump-service-work-order2-ticket.entity';
import { PumpServiceWorkOrder2Service } from './services/pump-service-work-order2.service';
import { PumpServiceWorkOrder2Controller } from './controllers/pump-service-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PumpServiceWorkOrder2Ticket])],
  controllers: [PumpServiceWorkOrder2Controller],
  providers: [PumpServiceWorkOrder2Service],
  exports: [PumpServiceWorkOrder2Service],
})
export class PumpServiceWorkOrder2Module {}
