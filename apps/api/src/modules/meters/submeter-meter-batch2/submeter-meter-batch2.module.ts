/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SubmeterMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmeterMeterBatch2Reading } from './entities/submeter-meter-batch2-reading.entity';
import { SubmeterMeterBatch2Service } from './services/submeter-meter-batch2.service';
import { SubmeterMeterBatch2Controller } from './controllers/submeter-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubmeterMeterBatch2Reading])],
  controllers: [SubmeterMeterBatch2Controller],
  providers: [SubmeterMeterBatch2Service],
  exports: [SubmeterMeterBatch2Service],
})
export class SubmeterMeterBatch2Module {}
