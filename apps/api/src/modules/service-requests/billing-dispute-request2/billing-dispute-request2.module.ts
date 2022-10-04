/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BillingDisputeRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingDisputeRequest2Case } from './entities/billing-dispute-request2-case.entity';
import { BillingDisputeRequest2Service } from './services/billing-dispute-request2.service';
import { BillingDisputeRequest2Controller } from './controllers/billing-dispute-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BillingDisputeRequest2Case])],
  controllers: [BillingDisputeRequest2Controller],
  providers: [BillingDisputeRequest2Service],
  exports: [BillingDisputeRequest2Service],
})
export class BillingDisputeRequest2Module {}
