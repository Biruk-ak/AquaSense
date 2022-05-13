/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighUseBillingCycle4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighUseBillingCycle4Invoice } from './entities/high-use-billing-cycle4-invoice.entity';
import { HighUseBillingCycle4Service } from './services/high-use-billing-cycle4.service';
import { HighUseBillingCycle4Controller } from './controllers/high-use-billing-cycle4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighUseBillingCycle4Invoice])],
  controllers: [HighUseBillingCycle4Controller],
  providers: [HighUseBillingCycle4Service],
  exports: [HighUseBillingCycle4Service],
})
export class HighUseBillingCycle4Module {}
