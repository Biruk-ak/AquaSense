/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BulkMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BulkMeterBatch1Reading } from './entities/bulk-meter-batch1-reading.entity';
import { BulkMeterBatch1Service } from './services/bulk-meter-batch1.service';
import { BulkMeterBatch1Controller } from './controllers/bulk-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BulkMeterBatch1Reading])],
  controllers: [BulkMeterBatch1Controller],
  providers: [BulkMeterBatch1Service],
  exports: [BulkMeterBatch1Service],
})
export class BulkMeterBatch1Module {}
