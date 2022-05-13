/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalBillingCycle1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalBillingCycle1Invoice } from './entities/agricultural-billing-cycle1-invoice.entity';
import { AgriculturalBillingCycle1Service } from './services/agricultural-billing-cycle1.service';
import { AgriculturalBillingCycle1Controller } from './controllers/agricultural-billing-cycle1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalBillingCycle1Invoice])],
  controllers: [AgriculturalBillingCycle1Controller],
  providers: [AgriculturalBillingCycle1Service],
  exports: [AgriculturalBillingCycle1Service],
})
export class AgriculturalBillingCycle1Module {}
