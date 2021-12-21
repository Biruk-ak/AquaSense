/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IrrigationMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrrigationMeterBatch3Reading } from './entities/irrigation-meter-batch3-reading.entity';
import { IrrigationMeterBatch3Service } from './services/irrigation-meter-batch3.service';
import { IrrigationMeterBatch3Controller } from './controllers/irrigation-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IrrigationMeterBatch3Reading])],
  controllers: [IrrigationMeterBatch3Controller],
  providers: [IrrigationMeterBatch3Service],
  exports: [IrrigationMeterBatch3Service],
})
export class IrrigationMeterBatch3Module {}
