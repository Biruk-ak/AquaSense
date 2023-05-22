/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConsumptionAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionAnalyticsSlice1Snapshot } from './entities/consumption-analytics-slice1-snapshot.entity';
import { ConsumptionAnalyticsSlice1Service } from './services/consumption-analytics-slice1.service';
import { ConsumptionAnalyticsSlice1Controller } from './controllers/consumption-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumptionAnalyticsSlice1Snapshot])],
  controllers: [ConsumptionAnalyticsSlice1Controller],
  providers: [ConsumptionAnalyticsSlice1Service],
  exports: [ConsumptionAnalyticsSlice1Service],
})
export class ConsumptionAnalyticsSlice1Module {}
