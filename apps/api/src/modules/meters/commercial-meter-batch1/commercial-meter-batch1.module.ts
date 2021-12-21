/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialMeterBatch1Reading } from './entities/commercial-meter-batch1-reading.entity';
import { CommercialMeterBatch1Service } from './services/commercial-meter-batch1.service';
import { CommercialMeterBatch1Controller } from './controllers/commercial-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialMeterBatch1Reading])],
  controllers: [CommercialMeterBatch1Controller],
  providers: [CommercialMeterBatch1Service],
  exports: [CommercialMeterBatch1Service],
})
export class CommercialMeterBatch1Module {}
