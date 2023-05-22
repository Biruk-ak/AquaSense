/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResponseTimeAnalyticsSlice2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseTimeAnalyticsSlice2Snapshot } from './entities/response-time-analytics-slice2-snapshot.entity';
import { ResponseTimeAnalyticsSlice2Service } from './services/response-time-analytics-slice2.service';
import { ResponseTimeAnalyticsSlice2Controller } from './controllers/response-time-analytics-slice2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseTimeAnalyticsSlice2Snapshot])],
  controllers: [ResponseTimeAnalyticsSlice2Controller],
  providers: [ResponseTimeAnalyticsSlice2Service],
  exports: [ResponseTimeAnalyticsSlice2Service],
})
export class ResponseTimeAnalyticsSlice2Module {}
