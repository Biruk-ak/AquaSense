/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResponseTimeAnalyticsSlice4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseTimeAnalyticsSlice4Snapshot } from './entities/response-time-analytics-slice4-snapshot.entity';
import { ResponseTimeAnalyticsSlice4Service } from './services/response-time-analytics-slice4.service';
import { ResponseTimeAnalyticsSlice4Controller } from './controllers/response-time-analytics-slice4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseTimeAnalyticsSlice4Snapshot])],
  controllers: [ResponseTimeAnalyticsSlice4Controller],
  providers: [ResponseTimeAnalyticsSlice4Service],
  exports: [ResponseTimeAnalyticsSlice4Service],
})
export class ResponseTimeAnalyticsSlice4Module {}
