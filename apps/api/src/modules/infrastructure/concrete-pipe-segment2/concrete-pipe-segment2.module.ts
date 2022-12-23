/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ConcretePipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcretePipeSegment2Asset } from './entities/concrete-pipe-segment2-asset.entity';
import { ConcretePipeSegment2Service } from './services/concrete-pipe-segment2.service';
import { ConcretePipeSegment2Controller } from './controllers/concrete-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConcretePipeSegment2Asset])],
  controllers: [ConcretePipeSegment2Controller],
  providers: [ConcretePipeSegment2Service],
  exports: [ConcretePipeSegment2Service],
})
export class ConcretePipeSegment2Module {}
