/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalBillingCycle3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalBillingCycle3Invoice } from './entities/agricultural-billing-cycle3-invoice.entity';
import { AgriculturalBillingCycle3Service } from './services/agricultural-billing-cycle3.service';
import { AgriculturalBillingCycle3Controller } from './controllers/agricultural-billing-cycle3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalBillingCycle3Invoice])],
  controllers: [AgriculturalBillingCycle3Controller],
  providers: [AgriculturalBillingCycle3Service],
  exports: [AgriculturalBillingCycle3Service],
})
export class AgriculturalBillingCycle3Module {}
