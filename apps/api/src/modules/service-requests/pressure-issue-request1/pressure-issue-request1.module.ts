/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PressureIssueRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureIssueRequest1Case } from './entities/pressure-issue-request1-case.entity';
import { PressureIssueRequest1Service } from './services/pressure-issue-request1.service';
import { PressureIssueRequest1Controller } from './controllers/pressure-issue-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PressureIssueRequest1Case])],
  controllers: [PressureIssueRequest1Controller],
  providers: [PressureIssueRequest1Service],
  exports: [PressureIssueRequest1Service],
})
export class PressureIssueRequest1Module {}
