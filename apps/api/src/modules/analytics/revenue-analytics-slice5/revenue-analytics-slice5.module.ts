/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: RevenueAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueAnalyticsSlice5Snapshot } from './entities/revenue-analytics-slice5-snapshot.entity';
import { RevenueAnalyticsSlice5Service } from './services/revenue-analytics-slice5.service';
import { RevenueAnalyticsSlice5Controller } from './controllers/revenue-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RevenueAnalyticsSlice5Snapshot])],
  controllers: [RevenueAnalyticsSlice5Controller],
  providers: [RevenueAnalyticsSlice5Service],
  exports: [RevenueAnalyticsSlice5Service],
})
export class RevenueAnalyticsSlice5Module {}
