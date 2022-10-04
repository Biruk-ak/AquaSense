/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighBillRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighBillRequest2Case } from './entities/high-bill-request2-case.entity';
import { HighBillRequest2Service } from './services/high-bill-request2.service';
import { HighBillRequest2Controller } from './controllers/high-bill-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighBillRequest2Case])],
  controllers: [HighBillRequest2Controller],
  providers: [HighBillRequest2Service],
  exports: [HighBillRequest2Service],
})
export class HighBillRequest2Module {}
