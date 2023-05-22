/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConsumptionAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionAnalyticsSlice2Snapshot } from './entities/consumption-analytics-slice2-snapshot.entity';
import { ConsumptionAnalyticsSlice2Service } from './services/consumption-analytics-slice2.service';
import { ConsumptionAnalyticsSlice2Controller } from './controllers/consumption-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumptionAnalyticsSlice2Snapshot])],
  controllers: [ConsumptionAnalyticsSlice2Controller],
  providers: [ConsumptionAnalyticsSlice2Service],
  exports: [ConsumptionAnalyticsSlice2Service],
})
export class ConsumptionAnalyticsSlice2Module {}
