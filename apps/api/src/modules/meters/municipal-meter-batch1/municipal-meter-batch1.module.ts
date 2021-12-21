/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MunicipalMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalMeterBatch1Reading } from './entities/municipal-meter-batch1-reading.entity';
import { MunicipalMeterBatch1Service } from './services/municipal-meter-batch1.service';
import { MunicipalMeterBatch1Controller } from './controllers/municipal-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalMeterBatch1Reading])],
  controllers: [MunicipalMeterBatch1Controller],
  providers: [MunicipalMeterBatch1Service],
  exports: [MunicipalMeterBatch1Service],
})
export class MunicipalMeterBatch1Module {}
