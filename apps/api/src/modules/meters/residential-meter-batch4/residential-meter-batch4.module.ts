/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResidentialMeterBatch4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentialMeterBatch4Reading } from './entities/residential-meter-batch4-reading.entity';
import { ResidentialMeterBatch4Service } from './services/residential-meter-batch4.service';
import { ResidentialMeterBatch4Controller } from './controllers/residential-meter-batch4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentialMeterBatch4Reading])],
  controllers: [ResidentialMeterBatch4Controller],
  providers: [ResidentialMeterBatch4Service],
  exports: [ResidentialMeterBatch4Service],
})
export class ResidentialMeterBatch4Module {}
