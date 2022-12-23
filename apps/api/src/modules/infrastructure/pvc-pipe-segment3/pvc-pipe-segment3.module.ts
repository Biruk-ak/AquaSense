/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PVCPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PVCPipeSegment3Asset } from './entities/pvc-pipe-segment3-asset.entity';
import { PVCPipeSegment3Service } from './services/pvc-pipe-segment3.service';
import { PVCPipeSegment3Controller } from './controllers/pvc-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PVCPipeSegment3Asset])],
  controllers: [PVCPipeSegment3Controller],
  providers: [PVCPipeSegment3Service],
  exports: [PVCPipeSegment3Service],
})
export class PVCPipeSegment3Module {}
