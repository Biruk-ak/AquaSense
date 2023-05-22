/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NrwAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NrwAnalyticsSlice3Snapshot } from './entities/nrw-analytics-slice3-snapshot.entity';
import { NrwAnalyticsSlice3Service } from './services/nrw-analytics-slice3.service';
import { NrwAnalyticsSlice3Controller } from './controllers/nrw-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NrwAnalyticsSlice3Snapshot])],
  controllers: [NrwAnalyticsSlice3Controller],
  providers: [NrwAnalyticsSlice3Service],
  exports: [NrwAnalyticsSlice3Service],
})
export class NrwAnalyticsSlice3Module {}
