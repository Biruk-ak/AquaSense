/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: OutageAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutageAnalyticsSlice4Snapshot } from './entities/outage-analytics-slice4-snapshot.entity';
import { OutageAnalyticsSlice4Service } from './services/outage-analytics-slice4.service';
import { OutageAnalyticsSlice4Controller } from './controllers/outage-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OutageAnalyticsSlice4Snapshot])],
  controllers: [OutageAnalyticsSlice4Controller],
  providers: [OutageAnalyticsSlice4Service],
  exports: [OutageAnalyticsSlice4Service],
})
export class OutageAnalyticsSlice4Module {}
