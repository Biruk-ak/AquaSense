/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalBillingCycle2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalBillingCycle2Invoice } from './entities/agricultural-billing-cycle2-invoice.entity';
import { AgriculturalBillingCycle2Service } from './services/agricultural-billing-cycle2.service';
import { AgriculturalBillingCycle2Controller } from './controllers/agricultural-billing-cycle2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalBillingCycle2Invoice])],
  controllers: [AgriculturalBillingCycle2Controller],
  providers: [AgriculturalBillingCycle2Service],
  exports: [AgriculturalBillingCycle2Service],
})
export class AgriculturalBillingCycle2Module {}
