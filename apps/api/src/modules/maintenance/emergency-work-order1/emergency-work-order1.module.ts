/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmergencyWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyWorkOrder1Ticket } from './entities/emergency-work-order1-ticket.entity';
import { EmergencyWorkOrder1Service } from './services/emergency-work-order1.service';
import { EmergencyWorkOrder1Controller } from './controllers/emergency-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyWorkOrder1Ticket])],
  controllers: [EmergencyWorkOrder1Controller],
  providers: [EmergencyWorkOrder1Service],
  exports: [EmergencyWorkOrder1Service],
})
export class EmergencyWorkOrder1Module {}
