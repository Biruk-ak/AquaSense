/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: RevenueAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueAnalyticsSlice2Snapshot } from './entities/revenue-analytics-slice2-snapshot.entity';
import { RevenueAnalyticsSlice2Service } from './services/revenue-analytics-slice2.service';
import { RevenueAnalyticsSlice2Controller } from './controllers/revenue-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RevenueAnalyticsSlice2Snapshot])],
  controllers: [RevenueAnalyticsSlice2Controller],
  providers: [RevenueAnalyticsSlice2Service],
  exports: [RevenueAnalyticsSlice2Service],
})
export class RevenueAnalyticsSlice2Module {}
