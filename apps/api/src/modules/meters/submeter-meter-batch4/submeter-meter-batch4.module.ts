/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SubmeterMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmeterMeterBatch4Reading } from './entities/submeter-meter-batch4-reading.entity';
import { SubmeterMeterBatch4Service } from './services/submeter-meter-batch4.service';
import { SubmeterMeterBatch4Controller } from './controllers/submeter-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubmeterMeterBatch4Reading])],
  controllers: [SubmeterMeterBatch4Controller],
  providers: [SubmeterMeterBatch4Service],
  exports: [SubmeterMeterBatch4Service],
})
export class SubmeterMeterBatch4Module {}
