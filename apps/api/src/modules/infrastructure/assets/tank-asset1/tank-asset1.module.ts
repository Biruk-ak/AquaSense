/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: TankAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TankAsset1Record } from './entities/tank-asset1-record.entity';
import { TankAsset1Service } from './services/tank-asset1.service';
import { TankAsset1Controller } from './controllers/tank-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TankAsset1Record])],
  controllers: [TankAsset1Controller],
  providers: [TankAsset1Service],
  exports: [TankAsset1Service],
})
export class TankAsset1Module {}
