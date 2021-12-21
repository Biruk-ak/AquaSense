/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialMeterBatch4Reading } from './entities/industrial-meter-batch4-reading.entity';
import { IndustrialMeterBatch4Service } from './services/industrial-meter-batch4.service';
import { IndustrialMeterBatch4Controller } from './controllers/industrial-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialMeterBatch4Reading])],
  controllers: [IndustrialMeterBatch4Controller],
  providers: [IndustrialMeterBatch4Service],
  exports: [IndustrialMeterBatch4Service],
})
export class IndustrialMeterBatch4Module {}
