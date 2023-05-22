/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakLossAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakLossAnalyticsSlice5Snapshot } from './entities/leak-loss-analytics-slice5-snapshot.entity';
import { LeakLossAnalyticsSlice5Service } from './services/leak-loss-analytics-slice5.service';
import { LeakLossAnalyticsSlice5Controller } from './controllers/leak-loss-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakLossAnalyticsSlice5Snapshot])],
  controllers: [LeakLossAnalyticsSlice5Controller],
  providers: [LeakLossAnalyticsSlice5Service],
  exports: [LeakLossAnalyticsSlice5Service],
})
export class LeakLossAnalyticsSlice5Module {}
