/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BulkMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BulkMeterBatch3Reading } from './entities/bulk-meter-batch3-reading.entity';
import { BulkMeterBatch3Service } from './services/bulk-meter-batch3.service';
import { BulkMeterBatch3Controller } from './controllers/bulk-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BulkMeterBatch3Reading])],
  controllers: [BulkMeterBatch3Controller],
  providers: [BulkMeterBatch3Service],
  exports: [BulkMeterBatch3Service],
})
export class BulkMeterBatch3Module {}
