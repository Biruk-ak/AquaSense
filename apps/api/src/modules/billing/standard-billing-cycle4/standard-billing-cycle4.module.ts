/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: StandardBillingCycle4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardBillingCycle4Invoice } from './entities/standard-billing-cycle4-invoice.entity';
import { StandardBillingCycle4Service } from './services/standard-billing-cycle4.service';
import { StandardBillingCycle4Controller } from './controllers/standard-billing-cycle4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StandardBillingCycle4Invoice])],
  controllers: [StandardBillingCycle4Controller],
  providers: [StandardBillingCycle4Service],
  exports: [StandardBillingCycle4Service],
})
export class StandardBillingCycle4Module {}
