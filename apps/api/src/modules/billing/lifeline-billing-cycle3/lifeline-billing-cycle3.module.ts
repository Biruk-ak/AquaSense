/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LifelineBillingCycle3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifelineBillingCycle3Invoice } from './entities/lifeline-billing-cycle3-invoice.entity';
import { LifelineBillingCycle3Service } from './services/lifeline-billing-cycle3.service';
import { LifelineBillingCycle3Controller } from './controllers/lifeline-billing-cycle3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LifelineBillingCycle3Invoice])],
  controllers: [LifelineBillingCycle3Controller],
  providers: [LifelineBillingCycle3Service],
  exports: [LifelineBillingCycle3Service],
})
export class LifelineBillingCycle3Module {}
