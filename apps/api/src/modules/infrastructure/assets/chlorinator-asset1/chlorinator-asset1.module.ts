/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ChlorinatorAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChlorinatorAsset1Record } from './entities/chlorinator-asset1-record.entity';
import { ChlorinatorAsset1Service } from './services/chlorinator-asset1.service';
import { ChlorinatorAsset1Controller } from './controllers/chlorinator-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChlorinatorAsset1Record])],
  controllers: [ChlorinatorAsset1Controller],
  providers: [ChlorinatorAsset1Service],
  exports: [ChlorinatorAsset1Service],
})
export class ChlorinatorAsset1Module {}
