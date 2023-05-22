/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResponseTimeAnalyticsSlice1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseTimeAnalyticsSlice1Snapshot } from './entities/response-time-analytics-slice1-snapshot.entity';
import { ResponseTimeAnalyticsSlice1Service } from './services/response-time-analytics-slice1.service';
import { ResponseTimeAnalyticsSlice1Controller } from './controllers/response-time-analytics-slice1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseTimeAnalyticsSlice1Snapshot])],
  controllers: [ResponseTimeAnalyticsSlice1Controller],
  providers: [ResponseTimeAnalyticsSlice1Service],
  exports: [ResponseTimeAnalyticsSlice1Service],
})
export class ResponseTimeAnalyticsSlice1Module {}
