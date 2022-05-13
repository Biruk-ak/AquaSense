/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: StandardBillingCycle5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardBillingCycle5Invoice } from './entities/standard-billing-cycle5-invoice.entity';
import { StandardBillingCycle5Service } from './services/standard-billing-cycle5.service';
import { StandardBillingCycle5Controller } from './controllers/standard-billing-cycle5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StandardBillingCycle5Invoice])],
  controllers: [StandardBillingCycle5Controller],
  providers: [StandardBillingCycle5Service],
  exports: [StandardBillingCycle5Service],
})
export class StandardBillingCycle5Module {}
