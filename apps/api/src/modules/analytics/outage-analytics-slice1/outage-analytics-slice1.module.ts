/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: OutageAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutageAnalyticsSlice1Snapshot } from './entities/outage-analytics-slice1-snapshot.entity';
import { OutageAnalyticsSlice1Service } from './services/outage-analytics-slice1.service';
import { OutageAnalyticsSlice1Controller } from './controllers/outage-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OutageAnalyticsSlice1Snapshot])],
  controllers: [OutageAnalyticsSlice1Controller],
  providers: [OutageAnalyticsSlice1Service],
  exports: [OutageAnalyticsSlice1Service],
})
export class OutageAnalyticsSlice1Module {}
