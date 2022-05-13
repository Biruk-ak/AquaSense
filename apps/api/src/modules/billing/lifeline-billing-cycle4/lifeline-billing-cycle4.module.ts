/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LifelineBillingCycle4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifelineBillingCycle4Invoice } from './entities/lifeline-billing-cycle4-invoice.entity';
import { LifelineBillingCycle4Service } from './services/lifeline-billing-cycle4.service';
import { LifelineBillingCycle4Controller } from './controllers/lifeline-billing-cycle4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LifelineBillingCycle4Invoice])],
  controllers: [LifelineBillingCycle4Controller],
  providers: [LifelineBillingCycle4Service],
  exports: [LifelineBillingCycle4Service],
})
export class LifelineBillingCycle4Module {}
