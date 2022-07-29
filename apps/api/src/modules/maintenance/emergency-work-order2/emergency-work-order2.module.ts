/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmergencyWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyWorkOrder2Ticket } from './entities/emergency-work-order2-ticket.entity';
import { EmergencyWorkOrder2Service } from './services/emergency-work-order2.service';
import { EmergencyWorkOrder2Controller } from './controllers/emergency-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyWorkOrder2Ticket])],
  controllers: [EmergencyWorkOrder2Controller],
  providers: [EmergencyWorkOrder2Service],
  exports: [EmergencyWorkOrder2Service],
})
export class EmergencyWorkOrder2Module {}
