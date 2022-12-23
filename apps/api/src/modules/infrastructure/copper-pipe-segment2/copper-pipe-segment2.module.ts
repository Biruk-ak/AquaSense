/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CopperPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopperPipeSegment2Asset } from './entities/copper-pipe-segment2-asset.entity';
import { CopperPipeSegment2Service } from './services/copper-pipe-segment2.service';
import { CopperPipeSegment2Controller } from './controllers/copper-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CopperPipeSegment2Asset])],
  controllers: [CopperPipeSegment2Controller],
  providers: [CopperPipeSegment2Service],
  exports: [CopperPipeSegment2Service],
})
export class CopperPipeSegment2Module {}
