/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CorrectiveWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrectiveWorkOrder1Ticket } from './entities/corrective-work-order1-ticket.entity';
import { CorrectiveWorkOrder1Service } from './services/corrective-work-order1.service';
import { CorrectiveWorkOrder1Controller } from './controllers/corrective-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CorrectiveWorkOrder1Ticket])],
  controllers: [CorrectiveWorkOrder1Controller],
  providers: [CorrectiveWorkOrder1Service],
  exports: [CorrectiveWorkOrder1Service],
})
export class CorrectiveWorkOrder1Module {}
