/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ReservoirAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservoirAsset1Record } from './entities/reservoir-asset1-record.entity';
import { ReservoirAsset1Service } from './services/reservoir-asset1.service';
import { ReservoirAsset1Controller } from './controllers/reservoir-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservoirAsset1Record])],
  controllers: [ReservoirAsset1Controller],
  providers: [ReservoirAsset1Service],
  exports: [ReservoirAsset1Service],
})
export class ReservoirAsset1Module {}
