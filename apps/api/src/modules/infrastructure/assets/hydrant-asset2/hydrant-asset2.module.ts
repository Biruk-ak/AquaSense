/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HydrantAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HydrantAsset2Record } from './entities/hydrant-asset2-record.entity';
import { HydrantAsset2Service } from './services/hydrant-asset2.service';
import { HydrantAsset2Controller } from './controllers/hydrant-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HydrantAsset2Record])],
  controllers: [HydrantAsset2Controller],
  providers: [HydrantAsset2Service],
  exports: [HydrantAsset2Service],
})
export class HydrantAsset2Module {}
