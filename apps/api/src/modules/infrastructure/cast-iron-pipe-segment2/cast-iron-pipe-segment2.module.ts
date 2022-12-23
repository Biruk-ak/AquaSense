/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CastIronPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastIronPipeSegment2Asset } from './entities/cast-iron-pipe-segment2-asset.entity';
import { CastIronPipeSegment2Service } from './services/cast-iron-pipe-segment2.service';
import { CastIronPipeSegment2Controller } from './controllers/cast-iron-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CastIronPipeSegment2Asset])],
  controllers: [CastIronPipeSegment2Controller],
  providers: [CastIronPipeSegment2Service],
  exports: [CastIronPipeSegment2Service],
})
export class CastIronPipeSegment2Module {}
