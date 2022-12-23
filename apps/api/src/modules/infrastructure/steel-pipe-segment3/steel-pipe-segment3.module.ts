/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SteelPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SteelPipeSegment3Asset } from './entities/steel-pipe-segment3-asset.entity';
import { SteelPipeSegment3Service } from './services/steel-pipe-segment3.service';
import { SteelPipeSegment3Controller } from './controllers/steel-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SteelPipeSegment3Asset])],
  controllers: [SteelPipeSegment3Controller],
  providers: [SteelPipeSegment3Service],
  exports: [SteelPipeSegment3Service],
})
export class SteelPipeSegment3Module {}
