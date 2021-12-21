/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResidentialMeterBatch2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentialMeterBatch2Reading } from './entities/residential-meter-batch2-reading.entity';
import { ResidentialMeterBatch2Service } from './services/residential-meter-batch2.service';
import { ResidentialMeterBatch2Controller } from './controllers/residential-meter-batch2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentialMeterBatch2Reading])],
  controllers: [ResidentialMeterBatch2Controller],
  providers: [ResidentialMeterBatch2Service],
  exports: [ResidentialMeterBatch2Service],
})
export class ResidentialMeterBatch2Module {}
