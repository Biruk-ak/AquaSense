/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: QualityAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityAnalyticsSlice2Snapshot } from './entities/quality-analytics-slice2-snapshot.entity';
import { QualityAnalyticsSlice2Service } from './services/quality-analytics-slice2.service';
import { QualityAnalyticsSlice2Controller } from './controllers/quality-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QualityAnalyticsSlice2Snapshot])],
  controllers: [QualityAnalyticsSlice2Controller],
  providers: [QualityAnalyticsSlice2Service],
  exports: [QualityAnalyticsSlice2Service],
})
export class QualityAnalyticsSlice2Module {}
