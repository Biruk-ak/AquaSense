/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BoosterAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoosterAsset1Record } from './entities/booster-asset1-record.entity';
import { BoosterAsset1Service } from './services/booster-asset1.service';
import { BoosterAsset1Controller } from './controllers/booster-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BoosterAsset1Record])],
  controllers: [BoosterAsset1Controller],
  providers: [BoosterAsset1Service],
  exports: [BoosterAsset1Service],
})
export class BoosterAsset1Module {}
