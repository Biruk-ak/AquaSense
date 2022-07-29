/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PreventiveWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreventiveWorkOrder3Ticket } from './entities/preventive-work-order3-ticket.entity';
import { PreventiveWorkOrder3Service } from './services/preventive-work-order3.service';
import { PreventiveWorkOrder3Controller } from './controllers/preventive-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PreventiveWorkOrder3Ticket])],
  controllers: [PreventiveWorkOrder3Controller],
  providers: [PreventiveWorkOrder3Service],
  exports: [PreventiveWorkOrder3Service],
})
export class PreventiveWorkOrder3Module {}
