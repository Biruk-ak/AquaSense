/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HydrantAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HydrantAsset1Record } from './entities/hydrant-asset1-record.entity';
import { HydrantAsset1Service } from './services/hydrant-asset1.service';
import { HydrantAsset1Controller } from './controllers/hydrant-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HydrantAsset1Record])],
  controllers: [HydrantAsset1Controller],
  providers: [HydrantAsset1Service],
  exports: [HydrantAsset1Service],
})
export class HydrantAsset1Module {}
