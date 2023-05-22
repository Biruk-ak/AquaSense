/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CollectionRateAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRateAnalyticsSlice2Snapshot } from './entities/collection-rate-analytics-slice2-snapshot.entity';
import { CollectionRateAnalyticsSlice2Service } from './services/collection-rate-analytics-slice2.service';
import { CollectionRateAnalyticsSlice2Controller } from './controllers/collection-rate-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionRateAnalyticsSlice2Snapshot])],
  controllers: [CollectionRateAnalyticsSlice2Controller],
  providers: [CollectionRateAnalyticsSlice2Service],
  exports: [CollectionRateAnalyticsSlice2Service],
})
export class CollectionRateAnalyticsSlice2Module {}
