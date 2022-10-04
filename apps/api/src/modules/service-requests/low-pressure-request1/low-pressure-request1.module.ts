/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LowPressureRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LowPressureRequest1Case } from './entities/low-pressure-request1-case.entity';
import { LowPressureRequest1Service } from './services/low-pressure-request1.service';
import { LowPressureRequest1Controller } from './controllers/low-pressure-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LowPressureRequest1Case])],
  controllers: [LowPressureRequest1Controller],
  providers: [LowPressureRequest1Service],
  exports: [LowPressureRequest1Service],
})
export class LowPressureRequest1Module {}
