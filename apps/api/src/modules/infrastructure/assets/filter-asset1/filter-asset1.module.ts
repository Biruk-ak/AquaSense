/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FilterAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterAsset1Record } from './entities/filter-asset1-record.entity';
import { FilterAsset1Service } from './services/filter-asset1.service';
import { FilterAsset1Controller } from './controllers/filter-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FilterAsset1Record])],
  controllers: [FilterAsset1Controller],
  providers: [FilterAsset1Service],
  exports: [FilterAsset1Service],
})
export class FilterAsset1Module {}
