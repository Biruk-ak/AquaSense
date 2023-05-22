/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureAnalyticsSlice4Snapshot } from './entities/pressure-analytics-slice4-snapshot.entity';
import { PressureAnalyticsSlice4Service } from './services/pressure-analytics-slice4.service';
import { PressureAnalyticsSlice4Controller } from './controllers/pressure-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureAnalyticsSlice4Snapshot])],
  controllers: [PressureAnalyticsSlice4Controller],
  providers: [PressureAnalyticsSlice4Service],
  exports: [PressureAnalyticsSlice4Service],
})
export class PressureAnalyticsSlice4Module {}
