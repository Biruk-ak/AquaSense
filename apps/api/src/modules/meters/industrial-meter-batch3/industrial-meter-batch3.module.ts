/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialMeterBatch3Reading } from './entities/industrial-meter-batch3-reading.entity';
import { IndustrialMeterBatch3Service } from './services/industrial-meter-batch3.service';
import { IndustrialMeterBatch3Controller } from './controllers/industrial-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialMeterBatch3Reading])],
  controllers: [IndustrialMeterBatch3Controller],
  providers: [IndustrialMeterBatch3Service],
  exports: [IndustrialMeterBatch3Service],
})
export class IndustrialMeterBatch3Module {}
