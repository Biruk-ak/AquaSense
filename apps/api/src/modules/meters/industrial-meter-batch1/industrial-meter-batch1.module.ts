/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialMeterBatch1Reading } from './entities/industrial-meter-batch1-reading.entity';
import { IndustrialMeterBatch1Service } from './services/industrial-meter-batch1.service';
import { IndustrialMeterBatch1Controller } from './controllers/industrial-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialMeterBatch1Reading])],
  controllers: [IndustrialMeterBatch1Controller],
  providers: [IndustrialMeterBatch1Service],
  exports: [IndustrialMeterBatch1Service],
})
export class IndustrialMeterBatch1Module {}
