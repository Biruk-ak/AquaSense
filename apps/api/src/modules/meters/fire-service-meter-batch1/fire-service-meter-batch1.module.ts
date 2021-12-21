/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FireServiceMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FireServiceMeterBatch1Reading } from './entities/fire-service-meter-batch1-reading.entity';
import { FireServiceMeterBatch1Service } from './services/fire-service-meter-batch1.service';
import { FireServiceMeterBatch1Controller } from './controllers/fire-service-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FireServiceMeterBatch1Reading])],
  controllers: [FireServiceMeterBatch1Controller],
  providers: [FireServiceMeterBatch1Service],
  exports: [FireServiceMeterBatch1Service],
})
export class FireServiceMeterBatch1Module {}
