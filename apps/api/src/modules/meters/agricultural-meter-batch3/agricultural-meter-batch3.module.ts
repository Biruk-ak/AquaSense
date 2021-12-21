/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalMeterBatch3Reading } from './entities/agricultural-meter-batch3-reading.entity';
import { AgriculturalMeterBatch3Service } from './services/agricultural-meter-batch3.service';
import { AgriculturalMeterBatch3Controller } from './controllers/agricultural-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalMeterBatch3Reading])],
  controllers: [AgriculturalMeterBatch3Controller],
  providers: [AgriculturalMeterBatch3Service],
  exports: [AgriculturalMeterBatch3Service],
})
export class AgriculturalMeterBatch3Module {}
