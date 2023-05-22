/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NrwAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NrwAnalyticsSlice2Snapshot } from './entities/nrw-analytics-slice2-snapshot.entity';
import { NrwAnalyticsSlice2Service } from './services/nrw-analytics-slice2.service';
import { NrwAnalyticsSlice2Controller } from './controllers/nrw-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NrwAnalyticsSlice2Snapshot])],
  controllers: [NrwAnalyticsSlice2Controller],
  providers: [NrwAnalyticsSlice2Service],
  exports: [NrwAnalyticsSlice2Service],
})
export class NrwAnalyticsSlice2Module {}
