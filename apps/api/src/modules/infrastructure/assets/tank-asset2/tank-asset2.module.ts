/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: TankAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TankAsset2Record } from './entities/tank-asset2-record.entity';
import { TankAsset2Service } from './services/tank-asset2.service';
import { TankAsset2Controller } from './controllers/tank-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TankAsset2Record])],
  controllers: [TankAsset2Controller],
  providers: [TankAsset2Service],
  exports: [TankAsset2Service],
})
export class TankAsset2Module {}
