/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PumpStationAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpStationAsset2Record } from './entities/pump-station-asset2-record.entity';
import { PumpStationAsset2Service } from './services/pump-station-asset2.service';
import { PumpStationAsset2Controller } from './controllers/pump-station-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PumpStationAsset2Record])],
  controllers: [PumpStationAsset2Controller],
  providers: [PumpStationAsset2Service],
  exports: [PumpStationAsset2Service],
})
export class PumpStationAsset2Module {}
