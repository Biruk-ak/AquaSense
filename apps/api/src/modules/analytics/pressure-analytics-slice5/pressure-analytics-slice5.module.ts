/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureAnalyticsSlice5Snapshot } from './entities/pressure-analytics-slice5-snapshot.entity';
import { PressureAnalyticsSlice5Service } from './services/pressure-analytics-slice5.service';
import { PressureAnalyticsSlice5Controller } from './controllers/pressure-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureAnalyticsSlice5Snapshot])],
  controllers: [PressureAnalyticsSlice5Controller],
  providers: [PressureAnalyticsSlice5Service],
  exports: [PressureAnalyticsSlice5Service],
})
export class PressureAnalyticsSlice5Module {}
