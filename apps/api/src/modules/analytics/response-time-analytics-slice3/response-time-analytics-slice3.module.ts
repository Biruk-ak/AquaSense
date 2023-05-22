/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResponseTimeAnalyticsSlice3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseTimeAnalyticsSlice3Snapshot } from './entities/response-time-analytics-slice3-snapshot.entity';
import { ResponseTimeAnalyticsSlice3Service } from './services/response-time-analytics-slice3.service';
import { ResponseTimeAnalyticsSlice3Controller } from './controllers/response-time-analytics-slice3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseTimeAnalyticsSlice3Snapshot])],
  controllers: [ResponseTimeAnalyticsSlice3Controller],
  providers: [ResponseTimeAnalyticsSlice3Service],
  exports: [ResponseTimeAnalyticsSlice3Service],
})
export class ResponseTimeAnalyticsSlice3Module {}
