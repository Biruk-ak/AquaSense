/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PEPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PEPipeSegment3Asset } from './entities/pe-pipe-segment3-asset.entity';
import { PEPipeSegment3Service } from './services/pe-pipe-segment3.service';
import { PEPipeSegment3Controller } from './controllers/pe-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PEPipeSegment3Asset])],
  controllers: [PEPipeSegment3Controller],
  providers: [PEPipeSegment3Service],
  exports: [PEPipeSegment3Service],
})
export class PEPipeSegment3Module {}
