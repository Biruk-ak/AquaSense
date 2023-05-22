/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: OutageAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutageAnalyticsSlice3Snapshot } from './entities/outage-analytics-slice3-snapshot.entity';
import { OutageAnalyticsSlice3Service } from './services/outage-analytics-slice3.service';
import { OutageAnalyticsSlice3Controller } from './controllers/outage-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OutageAnalyticsSlice3Snapshot])],
  controllers: [OutageAnalyticsSlice3Controller],
  providers: [OutageAnalyticsSlice3Service],
  exports: [OutageAnalyticsSlice3Service],
})
export class OutageAnalyticsSlice3Module {}
