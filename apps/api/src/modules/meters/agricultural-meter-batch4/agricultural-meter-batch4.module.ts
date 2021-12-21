/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AgriculturalMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturalMeterBatch4Reading } from './entities/agricultural-meter-batch4-reading.entity';
import { AgriculturalMeterBatch4Service } from './services/agricultural-meter-batch4.service';
import { AgriculturalMeterBatch4Controller } from './controllers/agricultural-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgriculturalMeterBatch4Reading])],
  controllers: [AgriculturalMeterBatch4Controller],
  providers: [AgriculturalMeterBatch4Service],
  exports: [AgriculturalMeterBatch4Service],
})
export class AgriculturalMeterBatch4Module {}
