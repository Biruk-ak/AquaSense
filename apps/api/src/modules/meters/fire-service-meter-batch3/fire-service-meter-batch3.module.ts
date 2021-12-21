/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FireServiceMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FireServiceMeterBatch3Reading } from './entities/fire-service-meter-batch3-reading.entity';
import { FireServiceMeterBatch3Service } from './services/fire-service-meter-batch3.service';
import { FireServiceMeterBatch3Controller } from './controllers/fire-service-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FireServiceMeterBatch3Reading])],
  controllers: [FireServiceMeterBatch3Controller],
  providers: [FireServiceMeterBatch3Service],
  exports: [FireServiceMeterBatch3Service],
})
export class FireServiceMeterBatch3Module {}
