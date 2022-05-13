/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialBillingCycle4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialBillingCycle4Invoice } from './entities/commercial-billing-cycle4-invoice.entity';
import { CommercialBillingCycle4Service } from './services/commercial-billing-cycle4.service';
import { CommercialBillingCycle4Controller } from './controllers/commercial-billing-cycle4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialBillingCycle4Invoice])],
  controllers: [CommercialBillingCycle4Controller],
  providers: [CommercialBillingCycle4Service],
  exports: [CommercialBillingCycle4Service],
})
export class CommercialBillingCycle4Module {}
