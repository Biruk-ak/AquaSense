/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: OutageAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutageAnalyticsSlice5Snapshot } from './entities/outage-analytics-slice5-snapshot.entity';
import { OutageAnalyticsSlice5Service } from './services/outage-analytics-slice5.service';
import { OutageAnalyticsSlice5Controller } from './controllers/outage-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OutageAnalyticsSlice5Snapshot])],
  controllers: [OutageAnalyticsSlice5Controller],
  providers: [OutageAnalyticsSlice5Service],
  exports: [OutageAnalyticsSlice5Service],
})
export class OutageAnalyticsSlice5Module {}
