/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakReportRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakReportRequest2Case } from './entities/leak-report-request2-case.entity';
import { LeakReportRequest2Service } from './services/leak-report-request2.service';
import { LeakReportRequest2Controller } from './controllers/leak-report-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakReportRequest2Case])],
  controllers: [LeakReportRequest2Controller],
  providers: [LeakReportRequest2Service],
  exports: [LeakReportRequest2Service],
})
export class LeakReportRequest2Module {}
