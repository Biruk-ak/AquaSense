/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakLossAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakLossAnalyticsSlice2Snapshot } from './entities/leak-loss-analytics-slice2-snapshot.entity';
import { LeakLossAnalyticsSlice2Service } from './services/leak-loss-analytics-slice2.service';
import { LeakLossAnalyticsSlice2Controller } from './controllers/leak-loss-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakLossAnalyticsSlice2Snapshot])],
  controllers: [LeakLossAnalyticsSlice2Controller],
  providers: [LeakLossAnalyticsSlice2Service],
  exports: [LeakLossAnalyticsSlice2Service],
})
export class LeakLossAnalyticsSlice2Module {}
