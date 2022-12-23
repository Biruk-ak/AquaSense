/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: TreatmentPlantAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlantAsset1Record } from './entities/treatment-plant-asset1-record.entity';
import { TreatmentPlantAsset1Service } from './services/treatment-plant-asset1.service';
import { TreatmentPlantAsset1Controller } from './controllers/treatment-plant-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentPlantAsset1Record])],
  controllers: [TreatmentPlantAsset1Controller],
  providers: [TreatmentPlantAsset1Service],
  exports: [TreatmentPlantAsset1Service],
})
export class TreatmentPlantAsset1Module {}
