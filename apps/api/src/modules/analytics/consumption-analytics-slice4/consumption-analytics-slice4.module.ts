/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConsumptionAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionAnalyticsSlice4Snapshot } from './entities/consumption-analytics-slice4-snapshot.entity';
import { ConsumptionAnalyticsSlice4Service } from './services/consumption-analytics-slice4.service';
import { ConsumptionAnalyticsSlice4Controller } from './controllers/consumption-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumptionAnalyticsSlice4Snapshot])],
  controllers: [ConsumptionAnalyticsSlice4Controller],
  providers: [ConsumptionAnalyticsSlice4Service],
  exports: [ConsumptionAnalyticsSlice4Service],
})
export class ConsumptionAnalyticsSlice4Module {}
