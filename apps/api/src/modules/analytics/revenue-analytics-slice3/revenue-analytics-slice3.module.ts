/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: RevenueAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueAnalyticsSlice3Snapshot } from './entities/revenue-analytics-slice3-snapshot.entity';
import { RevenueAnalyticsSlice3Service } from './services/revenue-analytics-slice3.service';
import { RevenueAnalyticsSlice3Controller } from './controllers/revenue-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RevenueAnalyticsSlice3Snapshot])],
  controllers: [RevenueAnalyticsSlice3Controller],
  providers: [RevenueAnalyticsSlice3Service],
  exports: [RevenueAnalyticsSlice3Service],
})
export class RevenueAnalyticsSlice3Module {}
