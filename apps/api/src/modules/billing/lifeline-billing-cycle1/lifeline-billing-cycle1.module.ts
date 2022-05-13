/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LifelineBillingCycle1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifelineBillingCycle1Invoice } from './entities/lifeline-billing-cycle1-invoice.entity';
import { LifelineBillingCycle1Service } from './services/lifeline-billing-cycle1.service';
import { LifelineBillingCycle1Controller } from './controllers/lifeline-billing-cycle1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LifelineBillingCycle1Invoice])],
  controllers: [LifelineBillingCycle1Controller],
  providers: [LifelineBillingCycle1Service],
  exports: [LifelineBillingCycle1Service],
})
export class LifelineBillingCycle1Module {}
