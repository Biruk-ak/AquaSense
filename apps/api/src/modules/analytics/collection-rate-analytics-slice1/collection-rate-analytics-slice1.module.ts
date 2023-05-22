/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CollectionRateAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRateAnalyticsSlice1Snapshot } from './entities/collection-rate-analytics-slice1-snapshot.entity';
import { CollectionRateAnalyticsSlice1Service } from './services/collection-rate-analytics-slice1.service';
import { CollectionRateAnalyticsSlice1Controller } from './controllers/collection-rate-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionRateAnalyticsSlice1Snapshot])],
  controllers: [CollectionRateAnalyticsSlice1Controller],
  providers: [CollectionRateAnalyticsSlice1Service],
  exports: [CollectionRateAnalyticsSlice1Service],
})
export class CollectionRateAnalyticsSlice1Module {}
