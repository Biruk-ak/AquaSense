/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PumpStationAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpStationAsset1Record } from './entities/pump-station-asset1-record.entity';
import { PumpStationAsset1Service } from './services/pump-station-asset1.service';
import { PumpStationAsset1Controller } from './controllers/pump-station-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PumpStationAsset1Record])],
  controllers: [PumpStationAsset1Controller],
  providers: [PumpStationAsset1Service],
  exports: [PumpStationAsset1Service],
})
export class PumpStationAsset1Module {}
