/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakLossAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakLossAnalyticsSlice1Snapshot } from './entities/leak-loss-analytics-slice1-snapshot.entity';
import { LeakLossAnalyticsSlice1Service } from './services/leak-loss-analytics-slice1.service';
import { LeakLossAnalyticsSlice1Controller } from './controllers/leak-loss-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakLossAnalyticsSlice1Snapshot])],
  controllers: [LeakLossAnalyticsSlice1Controller],
  providers: [LeakLossAnalyticsSlice1Service],
  exports: [LeakLossAnalyticsSlice1Service],
})
export class LeakLossAnalyticsSlice1Module {}
