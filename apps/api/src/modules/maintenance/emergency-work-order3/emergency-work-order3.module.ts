/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmergencyWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyWorkOrder3Ticket } from './entities/emergency-work-order3-ticket.entity';
import { EmergencyWorkOrder3Service } from './services/emergency-work-order3.service';
import { EmergencyWorkOrder3Controller } from './controllers/emergency-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyWorkOrder3Ticket])],
  controllers: [EmergencyWorkOrder3Controller],
  providers: [EmergencyWorkOrder3Service],
  exports: [EmergencyWorkOrder3Service],
})
export class EmergencyWorkOrder3Module {}
