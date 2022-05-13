/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialBillingCycle1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialBillingCycle1Invoice } from './entities/commercial-billing-cycle1-invoice.entity';
import { CommercialBillingCycle1Service } from './services/commercial-billing-cycle1.service';
import { CommercialBillingCycle1Controller } from './controllers/commercial-billing-cycle1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialBillingCycle1Invoice])],
  controllers: [CommercialBillingCycle1Controller],
  providers: [CommercialBillingCycle1Service],
  exports: [CommercialBillingCycle1Service],
})
export class CommercialBillingCycle1Module {}
