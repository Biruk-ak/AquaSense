/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConsumptionAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionAnalyticsSlice3Snapshot } from './entities/consumption-analytics-slice3-snapshot.entity';
import { ConsumptionAnalyticsSlice3Service } from './services/consumption-analytics-slice3.service';
import { ConsumptionAnalyticsSlice3Controller } from './controllers/consumption-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumptionAnalyticsSlice3Snapshot])],
  controllers: [ConsumptionAnalyticsSlice3Controller],
  providers: [ConsumptionAnalyticsSlice3Service],
  exports: [ConsumptionAnalyticsSlice3Service],
})
export class ConsumptionAnalyticsSlice3Module {}
