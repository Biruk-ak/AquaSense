/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MasterMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterMeterBatch2Reading } from './entities/master-meter-batch2-reading.entity';
import { MasterMeterBatch2Service } from './services/master-meter-batch2.service';
import { MasterMeterBatch2Controller } from './controllers/master-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterMeterBatch2Reading])],
  controllers: [MasterMeterBatch2Controller],
  providers: [MasterMeterBatch2Service],
  exports: [MasterMeterBatch2Service],
})
export class MasterMeterBatch2Module {}
