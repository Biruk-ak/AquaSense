/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LifelineBillingCycle5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifelineBillingCycle5Invoice } from './entities/lifeline-billing-cycle5-invoice.entity';
import { LifelineBillingCycle5Service } from './services/lifeline-billing-cycle5.service';
import { LifelineBillingCycle5Controller } from './controllers/lifeline-billing-cycle5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LifelineBillingCycle5Invoice])],
  controllers: [LifelineBillingCycle5Controller],
  providers: [LifelineBillingCycle5Service],
  exports: [LifelineBillingCycle5Service],
})
export class LifelineBillingCycle5Module {}
