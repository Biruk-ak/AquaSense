/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CastIronPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastIronPipeSegment3Asset } from './entities/cast-iron-pipe-segment3-asset.entity';
import { CastIronPipeSegment3Service } from './services/cast-iron-pipe-segment3.service';
import { CastIronPipeSegment3Controller } from './controllers/cast-iron-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CastIronPipeSegment3Asset])],
  controllers: [CastIronPipeSegment3Controller],
  providers: [CastIronPipeSegment3Service],
  exports: [CastIronPipeSegment3Service],
})
export class CastIronPipeSegment3Module {}
