/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConcretePipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcretePipeSegment3Asset } from './entities/concrete-pipe-segment3-asset.entity';
import { ConcretePipeSegment3Service } from './services/concrete-pipe-segment3.service';
import { ConcretePipeSegment3Controller } from './controllers/concrete-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConcretePipeSegment3Asset])],
  controllers: [ConcretePipeSegment3Controller],
  providers: [ConcretePipeSegment3Service],
  exports: [ConcretePipeSegment3Service],
})
export class ConcretePipeSegment3Module {}
