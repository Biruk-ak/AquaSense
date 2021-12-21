/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BulkMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BulkMeterBatch2Reading } from './entities/bulk-meter-batch2-reading.entity';
import { BulkMeterBatch2Service } from './services/bulk-meter-batch2.service';
import { BulkMeterBatch2Controller } from './controllers/bulk-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BulkMeterBatch2Reading])],
  controllers: [BulkMeterBatch2Controller],
  providers: [BulkMeterBatch2Service],
  exports: [BulkMeterBatch2Service],
})
export class BulkMeterBatch2Module {}
