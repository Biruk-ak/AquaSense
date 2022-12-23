/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConcretePipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcretePipeSegment1Asset } from './entities/concrete-pipe-segment1-asset.entity';
import { ConcretePipeSegment1Service } from './services/concrete-pipe-segment1.service';
import { ConcretePipeSegment1Controller } from './controllers/concrete-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConcretePipeSegment1Asset])],
  controllers: [ConcretePipeSegment1Controller],
  providers: [ConcretePipeSegment1Service],
  exports: [ConcretePipeSegment1Service],
})
export class ConcretePipeSegment1Module {}
