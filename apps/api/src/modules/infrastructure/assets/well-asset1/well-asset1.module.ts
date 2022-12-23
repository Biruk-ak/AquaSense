/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WellAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WellAsset1Record } from './entities/well-asset1-record.entity';
import { WellAsset1Service } from './services/well-asset1.service';
import { WellAsset1Controller } from './controllers/well-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WellAsset1Record])],
  controllers: [WellAsset1Controller],
  providers: [WellAsset1Service],
  exports: [WellAsset1Service],
})
export class WellAsset1Module {}
