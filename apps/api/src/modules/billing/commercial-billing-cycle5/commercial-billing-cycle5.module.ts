/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialBillingCycle5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialBillingCycle5Invoice } from './entities/commercial-billing-cycle5-invoice.entity';
import { CommercialBillingCycle5Service } from './services/commercial-billing-cycle5.service';
import { CommercialBillingCycle5Controller } from './controllers/commercial-billing-cycle5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialBillingCycle5Invoice])],
  controllers: [CommercialBillingCycle5Controller],
  providers: [CommercialBillingCycle5Service],
  exports: [CommercialBillingCycle5Service],
})
export class CommercialBillingCycle5Module {}
