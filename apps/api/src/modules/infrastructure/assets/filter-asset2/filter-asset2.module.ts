/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FilterAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterAsset2Record } from './entities/filter-asset2-record.entity';
import { FilterAsset2Service } from './services/filter-asset2.service';
import { FilterAsset2Controller } from './controllers/filter-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FilterAsset2Record])],
  controllers: [FilterAsset2Controller],
  providers: [FilterAsset2Service],
  exports: [FilterAsset2Service],
})
export class FilterAsset2Module {}
