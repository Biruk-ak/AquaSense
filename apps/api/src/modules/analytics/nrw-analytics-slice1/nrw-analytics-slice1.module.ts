/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NrwAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NrwAnalyticsSlice1Snapshot } from './entities/nrw-analytics-slice1-snapshot.entity';
import { NrwAnalyticsSlice1Service } from './services/nrw-analytics-slice1.service';
import { NrwAnalyticsSlice1Controller } from './controllers/nrw-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NrwAnalyticsSlice1Snapshot])],
  controllers: [NrwAnalyticsSlice1Controller],
  providers: [NrwAnalyticsSlice1Service],
  exports: [NrwAnalyticsSlice1Service],
})
export class NrwAnalyticsSlice1Module {}
