/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MasterMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterMeterBatch4Reading } from './entities/master-meter-batch4-reading.entity';
import { MasterMeterBatch4Service } from './services/master-meter-batch4.service';
import { MasterMeterBatch4Controller } from './controllers/master-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterMeterBatch4Reading])],
  controllers: [MasterMeterBatch4Controller],
  providers: [MasterMeterBatch4Service],
  exports: [MasterMeterBatch4Service],
})
export class MasterMeterBatch4Module {}
