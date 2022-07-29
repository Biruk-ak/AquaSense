/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CorrectiveWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrectiveWorkOrder2Ticket } from './entities/corrective-work-order2-ticket.entity';
import { CorrectiveWorkOrder2Service } from './services/corrective-work-order2.service';
import { CorrectiveWorkOrder2Controller } from './controllers/corrective-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CorrectiveWorkOrder2Ticket])],
  controllers: [CorrectiveWorkOrder2Controller],
  providers: [CorrectiveWorkOrder2Service],
  exports: [CorrectiveWorkOrder2Service],
})
export class CorrectiveWorkOrder2Module {}
