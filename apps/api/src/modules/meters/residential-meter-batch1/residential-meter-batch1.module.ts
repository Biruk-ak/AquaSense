/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResidentialMeterBatch1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentialMeterBatch1Reading } from './entities/residential-meter-batch1-reading.entity';
import { ResidentialMeterBatch1Service } from './services/residential-meter-batch1.service';
import { ResidentialMeterBatch1Controller } from './controllers/residential-meter-batch1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentialMeterBatch1Reading])],
  controllers: [ResidentialMeterBatch1Controller],
  providers: [ResidentialMeterBatch1Service],
  exports: [ResidentialMeterBatch1Service],
})
export class ResidentialMeterBatch1Module {}
