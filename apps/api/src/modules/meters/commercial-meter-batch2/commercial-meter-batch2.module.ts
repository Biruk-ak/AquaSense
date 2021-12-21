/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialMeterBatch2Reading } from './entities/commercial-meter-batch2-reading.entity';
import { CommercialMeterBatch2Service } from './services/commercial-meter-batch2.service';
import { CommercialMeterBatch2Controller } from './controllers/commercial-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialMeterBatch2Reading])],
  controllers: [CommercialMeterBatch2Controller],
  providers: [CommercialMeterBatch2Service],
  exports: [CommercialMeterBatch2Service],
})
export class CommercialMeterBatch2Module {}
