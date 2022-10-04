/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PaymentPlanRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentPlanRequest2Case } from './entities/payment-plan-request2-case.entity';
import { PaymentPlanRequest2Service } from './services/payment-plan-request2.service';
import { PaymentPlanRequest2Controller } from './controllers/payment-plan-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentPlanRequest2Case])],
  controllers: [PaymentPlanRequest2Controller],
  providers: [PaymentPlanRequest2Service],
  exports: [PaymentPlanRequest2Service],
})
export class PaymentPlanRequest2Module {}
