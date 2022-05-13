/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: StandardBillingCycle3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardBillingCycle3Invoice } from './entities/standard-billing-cycle3-invoice.entity';
import { StandardBillingCycle3Service } from './services/standard-billing-cycle3.service';
import { StandardBillingCycle3Controller } from './controllers/standard-billing-cycle3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StandardBillingCycle3Invoice])],
  controllers: [StandardBillingCycle3Controller],
  providers: [StandardBillingCycle3Service],
  exports: [StandardBillingCycle3Service],
})
export class StandardBillingCycle3Module {}
