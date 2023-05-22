/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NrwAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NrwAnalyticsSlice4Snapshot } from './entities/nrw-analytics-slice4-snapshot.entity';
import { NrwAnalyticsSlice4Service } from './services/nrw-analytics-slice4.service';
import { NrwAnalyticsSlice4Controller } from './controllers/nrw-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NrwAnalyticsSlice4Snapshot])],
  controllers: [NrwAnalyticsSlice4Controller],
  providers: [NrwAnalyticsSlice4Service],
  exports: [NrwAnalyticsSlice4Service],
})
export class NrwAnalyticsSlice4Module {}
