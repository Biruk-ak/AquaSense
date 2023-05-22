/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureAnalyticsSlice3Snapshot } from './entities/pressure-analytics-slice3-snapshot.entity';
import { PressureAnalyticsSlice3Service } from './services/pressure-analytics-slice3.service';
import { PressureAnalyticsSlice3Controller } from './controllers/pressure-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureAnalyticsSlice3Snapshot])],
  controllers: [PressureAnalyticsSlice3Controller],
  providers: [PressureAnalyticsSlice3Service],
  exports: [PressureAnalyticsSlice3Service],
})
export class PressureAnalyticsSlice3Module {}
