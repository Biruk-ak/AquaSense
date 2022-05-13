/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialBillingCycle3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialBillingCycle3Invoice } from './entities/commercial-billing-cycle3-invoice.entity';
import { CommercialBillingCycle3Service } from './services/commercial-billing-cycle3.service';
import { CommercialBillingCycle3Controller } from './controllers/commercial-billing-cycle3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialBillingCycle3Invoice])],
  controllers: [CommercialBillingCycle3Controller],
  providers: [CommercialBillingCycle3Service],
  exports: [CommercialBillingCycle3Service],
})
export class CommercialBillingCycle3Module {}
