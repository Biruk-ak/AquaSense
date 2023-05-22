/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureAnalyticsSlice1Snapshot } from './entities/pressure-analytics-slice1-snapshot.entity';
import { PressureAnalyticsSlice1Service } from './services/pressure-analytics-slice1.service';
import { PressureAnalyticsSlice1Controller } from './controllers/pressure-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureAnalyticsSlice1Snapshot])],
  controllers: [PressureAnalyticsSlice1Controller],
  providers: [PressureAnalyticsSlice1Service],
  exports: [PressureAnalyticsSlice1Service],
})
export class PressureAnalyticsSlice1Module {}
