/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MasterMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterMeterBatch1Reading } from './entities/master-meter-batch1-reading.entity';
import { MasterMeterBatch1Service } from './services/master-meter-batch1.service';
import { MasterMeterBatch1Controller } from './controllers/master-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterMeterBatch1Reading])],
  controllers: [MasterMeterBatch1Controller],
  providers: [MasterMeterBatch1Service],
  exports: [MasterMeterBatch1Service],
})
export class MasterMeterBatch1Module {}
