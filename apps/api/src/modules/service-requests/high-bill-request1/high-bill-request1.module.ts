/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighBillRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighBillRequest1Case } from './entities/high-bill-request1-case.entity';
import { HighBillRequest1Service } from './services/high-bill-request1.service';
import { HighBillRequest1Controller } from './controllers/high-bill-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighBillRequest1Case])],
  controllers: [HighBillRequest1Controller],
  providers: [HighBillRequest1Service],
  exports: [HighBillRequest1Service],
})
export class HighBillRequest1Module {}
