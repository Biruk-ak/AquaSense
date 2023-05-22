/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakLossAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakLossAnalyticsSlice3Snapshot } from './entities/leak-loss-analytics-slice3-snapshot.entity';
import { LeakLossAnalyticsSlice3Service } from './services/leak-loss-analytics-slice3.service';
import { LeakLossAnalyticsSlice3Controller } from './controllers/leak-loss-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakLossAnalyticsSlice3Snapshot])],
  controllers: [LeakLossAnalyticsSlice3Controller],
  providers: [LeakLossAnalyticsSlice3Service],
  exports: [LeakLossAnalyticsSlice3Service],
})
export class LeakLossAnalyticsSlice3Module {}
