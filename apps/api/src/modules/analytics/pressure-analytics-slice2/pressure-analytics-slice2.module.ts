/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureAnalyticsSlice2Snapshot } from './entities/pressure-analytics-slice2-snapshot.entity';
import { PressureAnalyticsSlice2Service } from './services/pressure-analytics-slice2.service';
import { PressureAnalyticsSlice2Controller } from './controllers/pressure-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureAnalyticsSlice2Snapshot])],
  controllers: [PressureAnalyticsSlice2Controller],
  providers: [PressureAnalyticsSlice2Service],
  exports: [PressureAnalyticsSlice2Service],
})
export class PressureAnalyticsSlice2Module {}
