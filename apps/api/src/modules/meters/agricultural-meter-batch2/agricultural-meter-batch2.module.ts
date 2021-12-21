/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalMeterBatch2Reading } from './entities/agricultural-meter-batch2-reading.entity';
import { AgriculturalMeterBatch2Service } from './services/agricultural-meter-batch2.service';
import { AgriculturalMeterBatch2Controller } from './controllers/agricultural-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalMeterBatch2Reading])],
  controllers: [AgriculturalMeterBatch2Controller],
  providers: [AgriculturalMeterBatch2Service],
  exports: [AgriculturalMeterBatch2Service],
})
export class AgriculturalMeterBatch2Module {}
