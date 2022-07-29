/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CorrectiveWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrectiveWorkOrder3Ticket } from './entities/corrective-work-order3-ticket.entity';
import { CorrectiveWorkOrder3Service } from './services/corrective-work-order3.service';
import { CorrectiveWorkOrder3Controller } from './controllers/corrective-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CorrectiveWorkOrder3Ticket])],
  controllers: [CorrectiveWorkOrder3Controller],
  providers: [CorrectiveWorkOrder3Service],
  exports: [CorrectiveWorkOrder3Service],
})
export class CorrectiveWorkOrder3Module {}
