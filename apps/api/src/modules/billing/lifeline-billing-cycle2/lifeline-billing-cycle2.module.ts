/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LifelineBillingCycle2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifelineBillingCycle2Invoice } from './entities/lifeline-billing-cycle2-invoice.entity';
import { LifelineBillingCycle2Service } from './services/lifeline-billing-cycle2.service';
import { LifelineBillingCycle2Controller } from './controllers/lifeline-billing-cycle2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LifelineBillingCycle2Invoice])],
  controllers: [LifelineBillingCycle2Controller],
  providers: [LifelineBillingCycle2Service],
  exports: [LifelineBillingCycle2Service],
})
export class LifelineBillingCycle2Module {}
