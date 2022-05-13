/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: StandardBillingCycle1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardBillingCycle1Invoice } from './entities/standard-billing-cycle1-invoice.entity';
import { StandardBillingCycle1Service } from './services/standard-billing-cycle1.service';
import { StandardBillingCycle1Controller } from './controllers/standard-billing-cycle1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StandardBillingCycle1Invoice])],
  controllers: [StandardBillingCycle1Controller],
  providers: [StandardBillingCycle1Service],
  exports: [StandardBillingCycle1Service],
})
export class StandardBillingCycle1Module {}
