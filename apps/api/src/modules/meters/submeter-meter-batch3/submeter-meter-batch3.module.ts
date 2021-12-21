/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SubmeterMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmeterMeterBatch3Reading } from './entities/submeter-meter-batch3-reading.entity';
import { SubmeterMeterBatch3Service } from './services/submeter-meter-batch3.service';
import { SubmeterMeterBatch3Controller } from './controllers/submeter-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubmeterMeterBatch3Reading])],
  controllers: [SubmeterMeterBatch3Controller],
  providers: [SubmeterMeterBatch3Service],
  exports: [SubmeterMeterBatch3Service],
})
export class SubmeterMeterBatch3Module {}
