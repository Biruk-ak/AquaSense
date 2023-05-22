/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: OutageAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutageAnalyticsSlice2Snapshot } from './entities/outage-analytics-slice2-snapshot.entity';
import { OutageAnalyticsSlice2Service } from './services/outage-analytics-slice2.service';
import { OutageAnalyticsSlice2Controller } from './controllers/outage-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OutageAnalyticsSlice2Snapshot])],
  controllers: [OutageAnalyticsSlice2Controller],
  providers: [OutageAnalyticsSlice2Service],
  exports: [OutageAnalyticsSlice2Service],
})
export class OutageAnalyticsSlice2Module {}
