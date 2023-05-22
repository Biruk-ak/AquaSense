/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakLossAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakLossAnalyticsSlice4Snapshot } from './entities/leak-loss-analytics-slice4-snapshot.entity';
import { LeakLossAnalyticsSlice4Service } from './services/leak-loss-analytics-slice4.service';
import { LeakLossAnalyticsSlice4Controller } from './controllers/leak-loss-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakLossAnalyticsSlice4Snapshot])],
  controllers: [LeakLossAnalyticsSlice4Controller],
  providers: [LeakLossAnalyticsSlice4Service],
  exports: [LeakLossAnalyticsSlice4Service],
})
export class LeakLossAnalyticsSlice4Module {}
