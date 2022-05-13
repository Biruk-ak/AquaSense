/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialBillingCycle2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialBillingCycle2Invoice } from './entities/industrial-billing-cycle2-invoice.entity';
import { IndustrialBillingCycle2Service } from './services/industrial-billing-cycle2.service';
import { IndustrialBillingCycle2Controller } from './controllers/industrial-billing-cycle2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialBillingCycle2Invoice])],
  controllers: [IndustrialBillingCycle2Controller],
  providers: [IndustrialBillingCycle2Service],
  exports: [IndustrialBillingCycle2Service],
})
export class IndustrialBillingCycle2Module {}
