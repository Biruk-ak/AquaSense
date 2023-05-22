/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CollectionRateAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRateAnalyticsSlice4Snapshot } from './entities/collection-rate-analytics-slice4-snapshot.entity';
import { CollectionRateAnalyticsSlice4Service } from './services/collection-rate-analytics-slice4.service';
import { CollectionRateAnalyticsSlice4Controller } from './controllers/collection-rate-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionRateAnalyticsSlice4Snapshot])],
  controllers: [CollectionRateAnalyticsSlice4Controller],
  providers: [CollectionRateAnalyticsSlice4Service],
  exports: [CollectionRateAnalyticsSlice4Service],
})
export class CollectionRateAnalyticsSlice4Module {}
