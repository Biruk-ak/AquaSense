/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighUseBillingCycle3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighUseBillingCycle3Invoice } from './entities/high-use-billing-cycle3-invoice.entity';
import { HighUseBillingCycle3Service } from './services/high-use-billing-cycle3.service';
import { HighUseBillingCycle3Controller } from './controllers/high-use-billing-cycle3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighUseBillingCycle3Invoice])],
  controllers: [HighUseBillingCycle3Controller],
  providers: [HighUseBillingCycle3Service],
  exports: [HighUseBillingCycle3Service],
})
export class HighUseBillingCycle3Module {}
