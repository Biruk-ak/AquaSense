/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConsumptionAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionAnalyticsSlice5Snapshot } from './entities/consumption-analytics-slice5-snapshot.entity';
import { ConsumptionAnalyticsSlice5Service } from './services/consumption-analytics-slice5.service';
import { ConsumptionAnalyticsSlice5Controller } from './controllers/consumption-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumptionAnalyticsSlice5Snapshot])],
  controllers: [ConsumptionAnalyticsSlice5Controller],
  providers: [ConsumptionAnalyticsSlice5Service],
  exports: [ConsumptionAnalyticsSlice5Service],
})
export class ConsumptionAnalyticsSlice5Module {}
