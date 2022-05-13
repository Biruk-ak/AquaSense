/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighUseBillingCycle5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighUseBillingCycle5Invoice } from './entities/high-use-billing-cycle5-invoice.entity';
import { HighUseBillingCycle5Service } from './services/high-use-billing-cycle5.service';
import { HighUseBillingCycle5Controller } from './controllers/high-use-billing-cycle5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighUseBillingCycle5Invoice])],
  controllers: [HighUseBillingCycle5Controller],
  providers: [HighUseBillingCycle5Service],
  exports: [HighUseBillingCycle5Service],
})
export class HighUseBillingCycle5Module {}
