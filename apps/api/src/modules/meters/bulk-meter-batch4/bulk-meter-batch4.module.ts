/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BulkMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BulkMeterBatch4Reading } from './entities/bulk-meter-batch4-reading.entity';
import { BulkMeterBatch4Service } from './services/bulk-meter-batch4.service';
import { BulkMeterBatch4Controller } from './controllers/bulk-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BulkMeterBatch4Reading])],
  controllers: [BulkMeterBatch4Controller],
  providers: [BulkMeterBatch4Service],
  exports: [BulkMeterBatch4Service],
})
export class BulkMeterBatch4Module {}
