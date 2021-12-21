/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MunicipalMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalMeterBatch4Reading } from './entities/municipal-meter-batch4-reading.entity';
import { MunicipalMeterBatch4Service } from './services/municipal-meter-batch4.service';
import { MunicipalMeterBatch4Controller } from './controllers/municipal-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalMeterBatch4Reading])],
  controllers: [MunicipalMeterBatch4Controller],
  providers: [MunicipalMeterBatch4Service],
  exports: [MunicipalMeterBatch4Service],
})
export class MunicipalMeterBatch4Module {}
