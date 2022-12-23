/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PEPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PEPipeSegment1Asset } from './entities/pe-pipe-segment1-asset.entity';
import { PEPipeSegment1Service } from './services/pe-pipe-segment1.service';
import { PEPipeSegment1Controller } from './controllers/pe-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PEPipeSegment1Asset])],
  controllers: [PEPipeSegment1Controller],
  providers: [PEPipeSegment1Service],
  exports: [PEPipeSegment1Service],
})
export class PEPipeSegment1Module {}
