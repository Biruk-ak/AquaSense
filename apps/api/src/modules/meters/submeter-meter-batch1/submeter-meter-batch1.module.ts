/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SubmeterMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmeterMeterBatch1Reading } from './entities/submeter-meter-batch1-reading.entity';
import { SubmeterMeterBatch1Service } from './services/submeter-meter-batch1.service';
import { SubmeterMeterBatch1Controller } from './controllers/submeter-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubmeterMeterBatch1Reading])],
  controllers: [SubmeterMeterBatch1Controller],
  providers: [SubmeterMeterBatch1Service],
  exports: [SubmeterMeterBatch1Service],
})
export class SubmeterMeterBatch1Module {}
