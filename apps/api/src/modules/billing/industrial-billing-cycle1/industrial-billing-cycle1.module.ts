/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialBillingCycle1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialBillingCycle1Invoice } from './entities/industrial-billing-cycle1-invoice.entity';
import { IndustrialBillingCycle1Service } from './services/industrial-billing-cycle1.service';
import { IndustrialBillingCycle1Controller } from './controllers/industrial-billing-cycle1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialBillingCycle1Invoice])],
  controllers: [IndustrialBillingCycle1Controller],
  providers: [IndustrialBillingCycle1Service],
  exports: [IndustrialBillingCycle1Service],
})
export class IndustrialBillingCycle1Module {}
