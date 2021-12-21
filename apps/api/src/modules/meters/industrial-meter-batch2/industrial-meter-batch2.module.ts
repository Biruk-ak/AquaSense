/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialMeterBatch2Reading } from './entities/industrial-meter-batch2-reading.entity';
import { IndustrialMeterBatch2Service } from './services/industrial-meter-batch2.service';
import { IndustrialMeterBatch2Controller } from './controllers/industrial-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialMeterBatch2Reading])],
  controllers: [IndustrialMeterBatch2Controller],
  providers: [IndustrialMeterBatch2Service],
  exports: [IndustrialMeterBatch2Service],
})
export class IndustrialMeterBatch2Module {}
