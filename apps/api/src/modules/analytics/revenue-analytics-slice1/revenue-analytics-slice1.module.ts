/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: RevenueAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueAnalyticsSlice1Snapshot } from './entities/revenue-analytics-slice1-snapshot.entity';
import { RevenueAnalyticsSlice1Service } from './services/revenue-analytics-slice1.service';
import { RevenueAnalyticsSlice1Controller } from './controllers/revenue-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RevenueAnalyticsSlice1Snapshot])],
  controllers: [RevenueAnalyticsSlice1Controller],
  providers: [RevenueAnalyticsSlice1Service],
  exports: [RevenueAnalyticsSlice1Service],
})
export class RevenueAnalyticsSlice1Module {}
