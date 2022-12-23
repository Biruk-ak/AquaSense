/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: BoosterAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoosterAsset2Record } from './entities/booster-asset2-record.entity';
import { BoosterAsset2Service } from './services/booster-asset2.service';
import { BoosterAsset2Controller } from './controllers/booster-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BoosterAsset2Record])],
  controllers: [BoosterAsset2Controller],
  providers: [BoosterAsset2Service],
  exports: [BoosterAsset2Service],
})
export class BoosterAsset2Module {}
