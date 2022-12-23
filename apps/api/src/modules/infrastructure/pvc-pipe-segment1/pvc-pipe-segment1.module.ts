/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PVCPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PVCPipeSegment1Asset } from './entities/pvc-pipe-segment1-asset.entity';
import { PVCPipeSegment1Service } from './services/pvc-pipe-segment1.service';
import { PVCPipeSegment1Controller } from './controllers/pvc-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PVCPipeSegment1Asset])],
  controllers: [PVCPipeSegment1Controller],
  providers: [PVCPipeSegment1Service],
  exports: [PVCPipeSegment1Service],
})
export class PVCPipeSegment1Module {}
