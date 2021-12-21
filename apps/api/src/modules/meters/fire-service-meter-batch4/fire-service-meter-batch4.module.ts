/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FireServiceMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FireServiceMeterBatch4Reading } from './entities/fire-service-meter-batch4-reading.entity';
import { FireServiceMeterBatch4Service } from './services/fire-service-meter-batch4.service';
import { FireServiceMeterBatch4Controller } from './controllers/fire-service-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FireServiceMeterBatch4Reading])],
  controllers: [FireServiceMeterBatch4Controller],
  providers: [FireServiceMeterBatch4Service],
  exports: [FireServiceMeterBatch4Service],
})
export class FireServiceMeterBatch4Module {}
