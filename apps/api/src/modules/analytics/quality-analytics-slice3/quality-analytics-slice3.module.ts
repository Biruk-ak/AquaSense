/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: QualityAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityAnalyticsSlice3Snapshot } from './entities/quality-analytics-slice3-snapshot.entity';
import { QualityAnalyticsSlice3Service } from './services/quality-analytics-slice3.service';
import { QualityAnalyticsSlice3Controller } from './controllers/quality-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QualityAnalyticsSlice3Snapshot])],
  controllers: [QualityAnalyticsSlice3Controller],
  providers: [QualityAnalyticsSlice3Service],
  exports: [QualityAnalyticsSlice3Service],
})
export class QualityAnalyticsSlice3Module {}
