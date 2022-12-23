/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SteelPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SteelPipeSegment1Asset } from './entities/steel-pipe-segment1-asset.entity';
import { SteelPipeSegment1Service } from './services/steel-pipe-segment1.service';
import { SteelPipeSegment1Controller } from './controllers/steel-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SteelPipeSegment1Asset])],
  controllers: [SteelPipeSegment1Controller],
  providers: [SteelPipeSegment1Service],
  exports: [SteelPipeSegment1Service],
})
export class SteelPipeSegment1Module {}
