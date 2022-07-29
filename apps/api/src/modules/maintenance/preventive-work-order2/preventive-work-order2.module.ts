/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PreventiveWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreventiveWorkOrder2Ticket } from './entities/preventive-work-order2-ticket.entity';
import { PreventiveWorkOrder2Service } from './services/preventive-work-order2.service';
import { PreventiveWorkOrder2Controller } from './controllers/preventive-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PreventiveWorkOrder2Ticket])],
  controllers: [PreventiveWorkOrder2Controller],
  providers: [PreventiveWorkOrder2Service],
  exports: [PreventiveWorkOrder2Service],
})
export class PreventiveWorkOrder2Module {}
