/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MunicipalMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalMeterBatch2Reading } from './entities/municipal-meter-batch2-reading.entity';
import { MunicipalMeterBatch2Service } from './services/municipal-meter-batch2.service';
import { MunicipalMeterBatch2Controller } from './controllers/municipal-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalMeterBatch2Reading])],
  controllers: [MunicipalMeterBatch2Controller],
  providers: [MunicipalMeterBatch2Service],
  exports: [MunicipalMeterBatch2Service],
})
export class MunicipalMeterBatch2Module {}
