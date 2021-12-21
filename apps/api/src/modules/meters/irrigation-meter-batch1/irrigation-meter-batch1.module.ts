/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IrrigationMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrrigationMeterBatch1Reading } from './entities/irrigation-meter-batch1-reading.entity';
import { IrrigationMeterBatch1Service } from './services/irrigation-meter-batch1.service';
import { IrrigationMeterBatch1Controller } from './controllers/irrigation-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IrrigationMeterBatch1Reading])],
  controllers: [IrrigationMeterBatch1Controller],
  providers: [IrrigationMeterBatch1Service],
  exports: [IrrigationMeterBatch1Service],
})
export class IrrigationMeterBatch1Module {}
