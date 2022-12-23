/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CopperPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopperPipeSegment3Asset } from './entities/copper-pipe-segment3-asset.entity';
import { CopperPipeSegment3Service } from './services/copper-pipe-segment3.service';
import { CopperPipeSegment3Controller } from './controllers/copper-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CopperPipeSegment3Asset])],
  controllers: [CopperPipeSegment3Controller],
  providers: [CopperPipeSegment3Service],
  exports: [CopperPipeSegment3Service],
})
export class CopperPipeSegment3Module {}
