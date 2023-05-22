/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterHealthAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterHealthAnalyticsSlice1Snapshot } from './entities/meter-health-analytics-slice1-snapshot.entity';
import { MeterHealthAnalyticsSlice1Service } from './services/meter-health-analytics-slice1.service';
import { MeterHealthAnalyticsSlice1Controller } from './controllers/meter-health-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterHealthAnalyticsSlice1Snapshot])],
  controllers: [MeterHealthAnalyticsSlice1Controller],
  providers: [MeterHealthAnalyticsSlice1Service],
  exports: [MeterHealthAnalyticsSlice1Service],
})
export class MeterHealthAnalyticsSlice1Module {}
