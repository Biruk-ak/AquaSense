/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: QualityAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityAnalyticsSlice5Snapshot } from './entities/quality-analytics-slice5-snapshot.entity';
import { QualityAnalyticsSlice5Service } from './services/quality-analytics-slice5.service';
import { QualityAnalyticsSlice5Controller } from './controllers/quality-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QualityAnalyticsSlice5Snapshot])],
  controllers: [QualityAnalyticsSlice5Controller],
  providers: [QualityAnalyticsSlice5Service],
  exports: [QualityAnalyticsSlice5Service],
})
export class QualityAnalyticsSlice5Module {}
