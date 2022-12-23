/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CopperPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopperPipeSegment1Asset } from './entities/copper-pipe-segment1-asset.entity';
import { CopperPipeSegment1Service } from './services/copper-pipe-segment1.service';
import { CopperPipeSegment1Controller } from './controllers/copper-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CopperPipeSegment1Asset])],
  controllers: [CopperPipeSegment1Controller],
  providers: [CopperPipeSegment1Service],
  exports: [CopperPipeSegment1Service],
})
export class CopperPipeSegment1Module {}
