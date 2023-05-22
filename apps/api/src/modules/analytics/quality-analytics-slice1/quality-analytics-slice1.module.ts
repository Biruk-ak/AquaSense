/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: QualityAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityAnalyticsSlice1Snapshot } from './entities/quality-analytics-slice1-snapshot.entity';
import { QualityAnalyticsSlice1Service } from './services/quality-analytics-slice1.service';
import { QualityAnalyticsSlice1Controller } from './controllers/quality-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QualityAnalyticsSlice1Snapshot])],
  controllers: [QualityAnalyticsSlice1Controller],
  providers: [QualityAnalyticsSlice1Service],
  exports: [QualityAnalyticsSlice1Service],
})
export class QualityAnalyticsSlice1Module {}
