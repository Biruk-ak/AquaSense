/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BillingDisputeRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingDisputeRequest1Case } from './entities/billing-dispute-request1-case.entity';
import { BillingDisputeRequest1Service } from './services/billing-dispute-request1.service';
import { BillingDisputeRequest1Controller } from './controllers/billing-dispute-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BillingDisputeRequest1Case])],
  controllers: [BillingDisputeRequest1Controller],
  providers: [BillingDisputeRequest1Service],
  exports: [BillingDisputeRequest1Service],
})
export class BillingDisputeRequest1Module {}
