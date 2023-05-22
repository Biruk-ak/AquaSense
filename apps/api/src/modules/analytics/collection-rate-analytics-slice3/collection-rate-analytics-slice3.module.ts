/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CollectionRateAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRateAnalyticsSlice3Snapshot } from './entities/collection-rate-analytics-slice3-snapshot.entity';
import { CollectionRateAnalyticsSlice3Service } from './services/collection-rate-analytics-slice3.service';
import { CollectionRateAnalyticsSlice3Controller } from './controllers/collection-rate-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionRateAnalyticsSlice3Snapshot])],
  controllers: [CollectionRateAnalyticsSlice3Controller],
  providers: [CollectionRateAnalyticsSlice3Service],
  exports: [CollectionRateAnalyticsSlice3Service],
})
export class CollectionRateAnalyticsSlice3Module {}
