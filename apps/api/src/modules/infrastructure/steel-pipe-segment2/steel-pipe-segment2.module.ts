/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SteelPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SteelPipeSegment2Asset } from './entities/steel-pipe-segment2-asset.entity';
import { SteelPipeSegment2Service } from './services/steel-pipe-segment2.service';
import { SteelPipeSegment2Controller } from './controllers/steel-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SteelPipeSegment2Asset])],
  controllers: [SteelPipeSegment2Controller],
  providers: [SteelPipeSegment2Service],
  exports: [SteelPipeSegment2Service],
})
export class SteelPipeSegment2Module {}
