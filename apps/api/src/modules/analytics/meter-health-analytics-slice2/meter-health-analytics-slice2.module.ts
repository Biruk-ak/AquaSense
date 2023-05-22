/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterHealthAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterHealthAnalyticsSlice2Snapshot } from './entities/meter-health-analytics-slice2-snapshot.entity';
import { MeterHealthAnalyticsSlice2Service } from './services/meter-health-analytics-slice2.service';
import { MeterHealthAnalyticsSlice2Controller } from './controllers/meter-health-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterHealthAnalyticsSlice2Snapshot])],
  controllers: [MeterHealthAnalyticsSlice2Controller],
  providers: [MeterHealthAnalyticsSlice2Service],
  exports: [MeterHealthAnalyticsSlice2Service],
})
export class MeterHealthAnalyticsSlice2Module {}
