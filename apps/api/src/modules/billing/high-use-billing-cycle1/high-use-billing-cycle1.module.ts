/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighUseBillingCycle1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighUseBillingCycle1Invoice } from './entities/high-use-billing-cycle1-invoice.entity';
import { HighUseBillingCycle1Service } from './services/high-use-billing-cycle1.service';
import { HighUseBillingCycle1Controller } from './controllers/high-use-billing-cycle1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighUseBillingCycle1Invoice])],
  controllers: [HighUseBillingCycle1Controller],
  providers: [HighUseBillingCycle1Service],
  exports: [HighUseBillingCycle1Service],
})
export class HighUseBillingCycle1Module {}
