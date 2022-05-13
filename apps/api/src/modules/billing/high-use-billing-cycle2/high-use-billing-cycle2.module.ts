/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighUseBillingCycle2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighUseBillingCycle2Invoice } from './entities/high-use-billing-cycle2-invoice.entity';
import { HighUseBillingCycle2Service } from './services/high-use-billing-cycle2.service';
import { HighUseBillingCycle2Controller } from './controllers/high-use-billing-cycle2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighUseBillingCycle2Invoice])],
  controllers: [HighUseBillingCycle2Controller],
  providers: [HighUseBillingCycle2Service],
  exports: [HighUseBillingCycle2Service],
})
export class HighUseBillingCycle2Module {}
