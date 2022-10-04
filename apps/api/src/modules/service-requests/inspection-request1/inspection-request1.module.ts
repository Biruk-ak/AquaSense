/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InspectionRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionRequest1Case } from './entities/inspection-request1-case.entity';
import { InspectionRequest1Service } from './services/inspection-request1.service';
import { InspectionRequest1Controller } from './controllers/inspection-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionRequest1Case])],
  controllers: [InspectionRequest1Controller],
  providers: [InspectionRequest1Service],
  exports: [InspectionRequest1Service],
})
export class InspectionRequest1Module {}
