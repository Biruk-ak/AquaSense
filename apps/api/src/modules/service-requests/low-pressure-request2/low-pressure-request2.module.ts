/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LowPressureRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LowPressureRequest2Case } from './entities/low-pressure-request2-case.entity';
import { LowPressureRequest2Service } from './services/low-pressure-request2.service';
import { LowPressureRequest2Controller } from './controllers/low-pressure-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LowPressureRequest2Case])],
  controllers: [LowPressureRequest2Controller],
  providers: [LowPressureRequest2Service],
  exports: [LowPressureRequest2Service],
})
export class LowPressureRequest2Module {}
