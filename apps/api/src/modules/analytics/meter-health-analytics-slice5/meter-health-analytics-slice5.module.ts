/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterHealthAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterHealthAnalyticsSlice5Snapshot } from './entities/meter-health-analytics-slice5-snapshot.entity';
import { MeterHealthAnalyticsSlice5Service } from './services/meter-health-analytics-slice5.service';
import { MeterHealthAnalyticsSlice5Controller } from './controllers/meter-health-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterHealthAnalyticsSlice5Snapshot])],
  controllers: [MeterHealthAnalyticsSlice5Controller],
  providers: [MeterHealthAnalyticsSlice5Service],
  exports: [MeterHealthAnalyticsSlice5Service],
})
export class MeterHealthAnalyticsSlice5Module {}
