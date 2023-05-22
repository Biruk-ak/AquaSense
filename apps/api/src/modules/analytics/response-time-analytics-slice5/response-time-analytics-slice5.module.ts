/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResponseTimeAnalyticsSlice5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseTimeAnalyticsSlice5Snapshot } from './entities/response-time-analytics-slice5-snapshot.entity';
import { ResponseTimeAnalyticsSlice5Service } from './services/response-time-analytics-slice5.service';
import { ResponseTimeAnalyticsSlice5Controller } from './controllers/response-time-analytics-slice5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseTimeAnalyticsSlice5Snapshot])],
  controllers: [ResponseTimeAnalyticsSlice5Controller],
  providers: [ResponseTimeAnalyticsSlice5Service],
  exports: [ResponseTimeAnalyticsSlice5Service],
})
export class ResponseTimeAnalyticsSlice5Module {}
