/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalMeterBatch1Reading } from './entities/agricultural-meter-batch1-reading.entity';
import { AgriculturalMeterBatch1Service } from './services/agricultural-meter-batch1.service';
import { AgriculturalMeterBatch1Controller } from './controllers/agricultural-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalMeterBatch1Reading])],
  controllers: [AgriculturalMeterBatch1Controller],
  providers: [AgriculturalMeterBatch1Service],
  exports: [AgriculturalMeterBatch1Service],
})
export class AgriculturalMeterBatch1Module {}
