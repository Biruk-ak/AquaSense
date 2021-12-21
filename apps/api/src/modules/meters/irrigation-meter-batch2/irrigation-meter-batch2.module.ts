/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IrrigationMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrrigationMeterBatch2Reading } from './entities/irrigation-meter-batch2-reading.entity';
import { IrrigationMeterBatch2Service } from './services/irrigation-meter-batch2.service';
import { IrrigationMeterBatch2Controller } from './controllers/irrigation-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IrrigationMeterBatch2Reading])],
  controllers: [IrrigationMeterBatch2Controller],
  providers: [IrrigationMeterBatch2Service],
  exports: [IrrigationMeterBatch2Service],
})
export class IrrigationMeterBatch2Module {}
