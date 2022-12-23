/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ReservoirAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservoirAsset2Record } from './entities/reservoir-asset2-record.entity';
import { ReservoirAsset2Service } from './services/reservoir-asset2.service';
import { ReservoirAsset2Controller } from './controllers/reservoir-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservoirAsset2Record])],
  controllers: [ReservoirAsset2Controller],
  providers: [ReservoirAsset2Service],
  exports: [ReservoirAsset2Service],
})
export class ReservoirAsset2Module {}
