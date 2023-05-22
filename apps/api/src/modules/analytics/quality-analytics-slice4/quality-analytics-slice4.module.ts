/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: QualityAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityAnalyticsSlice4Snapshot } from './entities/quality-analytics-slice4-snapshot.entity';
import { QualityAnalyticsSlice4Service } from './services/quality-analytics-slice4.service';
import { QualityAnalyticsSlice4Controller } from './controllers/quality-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QualityAnalyticsSlice4Snapshot])],
  controllers: [QualityAnalyticsSlice4Controller],
  providers: [QualityAnalyticsSlice4Service],
  exports: [QualityAnalyticsSlice4Service],
})
export class QualityAnalyticsSlice4Module {}
