/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PreventiveWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreventiveWorkOrder1Ticket } from './entities/preventive-work-order1-ticket.entity';
import { PreventiveWorkOrder1Service } from './services/preventive-work-order1.service';
import { PreventiveWorkOrder1Controller } from './controllers/preventive-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PreventiveWorkOrder1Ticket])],
  controllers: [PreventiveWorkOrder1Controller],
  providers: [PreventiveWorkOrder1Service],
  exports: [PreventiveWorkOrder1Service],
})
export class PreventiveWorkOrder1Module {}
