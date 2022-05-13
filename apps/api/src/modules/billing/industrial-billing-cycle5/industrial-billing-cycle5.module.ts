/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialBillingCycle5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialBillingCycle5Invoice } from './entities/industrial-billing-cycle5-invoice.entity';
import { IndustrialBillingCycle5Service } from './services/industrial-billing-cycle5.service';
import { IndustrialBillingCycle5Controller } from './controllers/industrial-billing-cycle5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialBillingCycle5Invoice])],
  controllers: [IndustrialBillingCycle5Controller],
  providers: [IndustrialBillingCycle5Service],
  exports: [IndustrialBillingCycle5Service],
})
export class IndustrialBillingCycle5Module {}
