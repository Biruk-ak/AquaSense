/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalBillingCycle5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalBillingCycle5Invoice } from './entities/agricultural-billing-cycle5-invoice.entity';
import { AgriculturalBillingCycle5Service } from './services/agricultural-billing-cycle5.service';
import { AgriculturalBillingCycle5Controller } from './controllers/agricultural-billing-cycle5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalBillingCycle5Invoice])],
  controllers: [AgriculturalBillingCycle5Controller],
  providers: [AgriculturalBillingCycle5Service],
  exports: [AgriculturalBillingCycle5Service],
})
export class AgriculturalBillingCycle5Module {}
