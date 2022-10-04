/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InspectionRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionRequest2Case } from './entities/inspection-request2-case.entity';
import { InspectionRequest2Service } from './services/inspection-request2.service';
import { InspectionRequest2Controller } from './controllers/inspection-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionRequest2Case])],
  controllers: [InspectionRequest2Controller],
  providers: [InspectionRequest2Service],
  exports: [InspectionRequest2Service],
})
export class InspectionRequest2Module {}
