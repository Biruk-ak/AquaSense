/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MasterMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterMeterBatch3Reading } from './entities/master-meter-batch3-reading.entity';
import { MasterMeterBatch3Service } from './services/master-meter-batch3.service';
import { MasterMeterBatch3Controller } from './controllers/master-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterMeterBatch3Reading])],
  controllers: [MasterMeterBatch3Controller],
  providers: [MasterMeterBatch3Service],
  exports: [MasterMeterBatch3Service],
})
export class MasterMeterBatch3Module {}
