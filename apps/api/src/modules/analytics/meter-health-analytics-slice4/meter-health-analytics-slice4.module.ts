/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterHealthAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterHealthAnalyticsSlice4Snapshot } from './entities/meter-health-analytics-slice4-snapshot.entity';
import { MeterHealthAnalyticsSlice4Service } from './services/meter-health-analytics-slice4.service';
import { MeterHealthAnalyticsSlice4Controller } from './controllers/meter-health-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterHealthAnalyticsSlice4Snapshot])],
  controllers: [MeterHealthAnalyticsSlice4Controller],
  providers: [MeterHealthAnalyticsSlice4Service],
  exports: [MeterHealthAnalyticsSlice4Service],
})
export class MeterHealthAnalyticsSlice4Module {}
