/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialMeterBatch4Reading } from './entities/commercial-meter-batch4-reading.entity';
import { CommercialMeterBatch4Service } from './services/commercial-meter-batch4.service';
import { CommercialMeterBatch4Controller } from './controllers/commercial-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialMeterBatch4Reading])],
  controllers: [CommercialMeterBatch4Controller],
  providers: [CommercialMeterBatch4Service],
  exports: [CommercialMeterBatch4Service],
})
export class CommercialMeterBatch4Module {}
