/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PaymentPlanRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentPlanRequest1Case } from './entities/payment-plan-request1-case.entity';
import { PaymentPlanRequest1Service } from './services/payment-plan-request1.service';
import { PaymentPlanRequest1Controller } from './controllers/payment-plan-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentPlanRequest1Case])],
  controllers: [PaymentPlanRequest1Controller],
  providers: [PaymentPlanRequest1Service],
  exports: [PaymentPlanRequest1Service],
})
export class PaymentPlanRequest1Module {}
