/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: StandardBillingCycle2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardBillingCycle2Invoice } from './entities/standard-billing-cycle2-invoice.entity';
import { StandardBillingCycle2Service } from './services/standard-billing-cycle2.service';
import { StandardBillingCycle2Controller } from './controllers/standard-billing-cycle2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StandardBillingCycle2Invoice])],
  controllers: [StandardBillingCycle2Controller],
  providers: [StandardBillingCycle2Service],
  exports: [StandardBillingCycle2Service],
})
export class StandardBillingCycle2Module {}
