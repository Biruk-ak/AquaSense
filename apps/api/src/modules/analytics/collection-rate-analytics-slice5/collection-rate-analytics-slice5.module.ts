/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CollectionRateAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRateAnalyticsSlice5Snapshot } from './entities/collection-rate-analytics-slice5-snapshot.entity';
import { CollectionRateAnalyticsSlice5Service } from './services/collection-rate-analytics-slice5.service';
import { CollectionRateAnalyticsSlice5Controller } from './controllers/collection-rate-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionRateAnalyticsSlice5Snapshot])],
  controllers: [CollectionRateAnalyticsSlice5Controller],
  providers: [CollectionRateAnalyticsSlice5Service],
  exports: [CollectionRateAnalyticsSlice5Service],
})
export class CollectionRateAnalyticsSlice5Module {}
