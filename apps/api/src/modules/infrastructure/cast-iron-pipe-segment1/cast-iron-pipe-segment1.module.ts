/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CastIronPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastIronPipeSegment1Asset } from './entities/cast-iron-pipe-segment1-asset.entity';
import { CastIronPipeSegment1Service } from './services/cast-iron-pipe-segment1.service';
import { CastIronPipeSegment1Controller } from './controllers/cast-iron-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CastIronPipeSegment1Asset])],
  controllers: [CastIronPipeSegment1Controller],
  providers: [CastIronPipeSegment1Service],
  exports: [CastIronPipeSegment1Service],
})
export class CastIronPipeSegment1Module {}
