/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureIssueRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureIssueRequest2Case } from './entities/pressure-issue-request2-case.entity';
import { PressureIssueRequest2Service } from './services/pressure-issue-request2.service';
import { PressureIssueRequest2Controller } from './controllers/pressure-issue-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureIssueRequest2Case])],
  controllers: [PressureIssueRequest2Controller],
  providers: [PressureIssueRequest2Service],
  exports: [PressureIssueRequest2Service],
})
export class PressureIssueRequest2Module {}
