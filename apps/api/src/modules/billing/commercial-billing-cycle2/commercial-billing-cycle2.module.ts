/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialBillingCycle2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialBillingCycle2Invoice } from './entities/commercial-billing-cycle2-invoice.entity';
import { CommercialBillingCycle2Service } from './services/commercial-billing-cycle2.service';
import { CommercialBillingCycle2Controller } from './controllers/commercial-billing-cycle2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialBillingCycle2Invoice])],
  controllers: [CommercialBillingCycle2Controller],
  providers: [CommercialBillingCycle2Service],
  exports: [CommercialBillingCycle2Service],
})
export class CommercialBillingCycle2Module {}
