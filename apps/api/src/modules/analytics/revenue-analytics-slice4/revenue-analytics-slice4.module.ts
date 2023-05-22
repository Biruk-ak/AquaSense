/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: RevenueAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueAnalyticsSlice4Snapshot } from './entities/revenue-analytics-slice4-snapshot.entity';
import { RevenueAnalyticsSlice4Service } from './services/revenue-analytics-slice4.service';
import { RevenueAnalyticsSlice4Controller } from './controllers/revenue-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RevenueAnalyticsSlice4Snapshot])],
  controllers: [RevenueAnalyticsSlice4Controller],
  providers: [RevenueAnalyticsSlice4Service],
  exports: [RevenueAnalyticsSlice4Service],
})
export class RevenueAnalyticsSlice4Module {}
