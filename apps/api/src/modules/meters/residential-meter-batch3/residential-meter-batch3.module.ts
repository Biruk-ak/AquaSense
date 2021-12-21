/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResidentialMeterBatch3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentialMeterBatch3Reading } from './entities/residential-meter-batch3-reading.entity';
import { ResidentialMeterBatch3Service } from './services/residential-meter-batch3.service';
import { ResidentialMeterBatch3Controller } from './controllers/residential-meter-batch3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentialMeterBatch3Reading])],
  controllers: [ResidentialMeterBatch3Controller],
  providers: [ResidentialMeterBatch3Service],
  exports: [ResidentialMeterBatch3Service],
})
export class ResidentialMeterBatch3Module {}
