/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IrrigationMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrrigationMeterBatch4Reading } from './entities/irrigation-meter-batch4-reading.entity';
import { IrrigationMeterBatch4Service } from './services/irrigation-meter-batch4.service';
import { IrrigationMeterBatch4Controller } from './controllers/irrigation-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IrrigationMeterBatch4Reading])],
  controllers: [IrrigationMeterBatch4Controller],
  providers: [IrrigationMeterBatch4Service],
  exports: [IrrigationMeterBatch4Service],
})
export class IrrigationMeterBatch4Module {}
