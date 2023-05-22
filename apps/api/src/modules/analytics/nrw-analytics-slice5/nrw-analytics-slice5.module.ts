/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NrwAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NrwAnalyticsSlice5Snapshot } from './entities/nrw-analytics-slice5-snapshot.entity';
import { NrwAnalyticsSlice5Service } from './services/nrw-analytics-slice5.service';
import { NrwAnalyticsSlice5Controller } from './controllers/nrw-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NrwAnalyticsSlice5Snapshot])],
  controllers: [NrwAnalyticsSlice5Controller],
  providers: [NrwAnalyticsSlice5Service],
  exports: [NrwAnalyticsSlice5Service],
})
export class NrwAnalyticsSlice5Module {}
