/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialBillingCycle3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialBillingCycle3Invoice } from './entities/industrial-billing-cycle3-invoice.entity';
import { IndustrialBillingCycle3Service } from './services/industrial-billing-cycle3.service';
import { IndustrialBillingCycle3Controller } from './controllers/industrial-billing-cycle3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialBillingCycle3Invoice])],
  controllers: [IndustrialBillingCycle3Controller],
  providers: [IndustrialBillingCycle3Service],
  exports: [IndustrialBillingCycle3Service],
})
export class IndustrialBillingCycle3Module {}
