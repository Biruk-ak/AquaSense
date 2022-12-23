/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: TreatmentPlantAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlantAsset2Record } from './entities/treatment-plant-asset2-record.entity';
import { TreatmentPlantAsset2Service } from './services/treatment-plant-asset2.service';
import { TreatmentPlantAsset2Controller } from './controllers/treatment-plant-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentPlantAsset2Record])],
  controllers: [TreatmentPlantAsset2Controller],
  providers: [TreatmentPlantAsset2Service],
  exports: [TreatmentPlantAsset2Service],
})
export class TreatmentPlantAsset2Module {}
