/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterHealthAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterHealthAnalyticsSlice3Snapshot } from './entities/meter-health-analytics-slice3-snapshot.entity';
import { MeterHealthAnalyticsSlice3Service } from './services/meter-health-analytics-slice3.service';
import { MeterHealthAnalyticsSlice3Controller } from './controllers/meter-health-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterHealthAnalyticsSlice3Snapshot])],
  controllers: [MeterHealthAnalyticsSlice3Controller],
  providers: [MeterHealthAnalyticsSlice3Service],
  exports: [MeterHealthAnalyticsSlice3Service],
})
export class MeterHealthAnalyticsSlice3Module {}
