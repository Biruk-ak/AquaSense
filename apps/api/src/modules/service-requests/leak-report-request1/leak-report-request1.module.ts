/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakReportRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakReportRequest1Case } from './entities/leak-report-request1-case.entity';
import { LeakReportRequest1Service } from './services/leak-report-request1.service';
import { LeakReportRequest1Controller } from './controllers/leak-report-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakReportRequest1Case])],
  controllers: [LeakReportRequest1Controller],
  providers: [LeakReportRequest1Service],
  exports: [LeakReportRequest1Service],
})
export class LeakReportRequest1Module {}
