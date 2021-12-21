/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FireServiceMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FireServiceMeterBatch2Reading } from './entities/fire-service-meter-batch2-reading.entity';
import { FireServiceMeterBatch2Service } from './services/fire-service-meter-batch2.service';
import { FireServiceMeterBatch2Controller } from './controllers/fire-service-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FireServiceMeterBatch2Reading])],
  controllers: [FireServiceMeterBatch2Controller],
  providers: [FireServiceMeterBatch2Service],
  exports: [FireServiceMeterBatch2Service],
})
export class FireServiceMeterBatch2Module {}
