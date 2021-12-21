/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialMeterBatch3Reading } from './entities/commercial-meter-batch3-reading.entity';
import { CommercialMeterBatch3Service } from './services/commercial-meter-batch3.service';
import { CommercialMeterBatch3Controller } from './controllers/commercial-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialMeterBatch3Reading])],
  controllers: [CommercialMeterBatch3Controller],
  providers: [CommercialMeterBatch3Service],
  exports: [CommercialMeterBatch3Service],
})
export class CommercialMeterBatch3Module {}
