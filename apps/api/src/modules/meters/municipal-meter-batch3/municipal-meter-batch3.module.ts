/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MunicipalMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalMeterBatch3Reading } from './entities/municipal-meter-batch3-reading.entity';
import { MunicipalMeterBatch3Service } from './services/municipal-meter-batch3.service';
import { MunicipalMeterBatch3Controller } from './controllers/municipal-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalMeterBatch3Reading])],
  controllers: [MunicipalMeterBatch3Controller],
  providers: [MunicipalMeterBatch3Service],
  exports: [MunicipalMeterBatch3Service],
})
export class MunicipalMeterBatch3Module {}
