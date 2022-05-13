/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalBillingCycle4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalBillingCycle4Invoice } from './entities/agricultural-billing-cycle4-invoice.entity';
import { AgriculturalBillingCycle4Service } from './services/agricultural-billing-cycle4.service';
import { AgriculturalBillingCycle4Controller } from './controllers/agricultural-billing-cycle4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalBillingCycle4Invoice])],
  controllers: [AgriculturalBillingCycle4Controller],
  providers: [AgriculturalBillingCycle4Service],
  exports: [AgriculturalBillingCycle4Service],
})
export class AgriculturalBillingCycle4Module {}
