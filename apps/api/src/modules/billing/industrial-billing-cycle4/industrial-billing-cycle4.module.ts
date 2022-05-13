/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialBillingCycle4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialBillingCycle4Invoice } from './entities/industrial-billing-cycle4-invoice.entity';
import { IndustrialBillingCycle4Service } from './services/industrial-billing-cycle4.service';
import { IndustrialBillingCycle4Controller } from './controllers/industrial-billing-cycle4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialBillingCycle4Invoice])],
  controllers: [IndustrialBillingCycle4Controller],
  providers: [IndustrialBillingCycle4Service],
  exports: [IndustrialBillingCycle4Service],
})
export class IndustrialBillingCycle4Module {}
