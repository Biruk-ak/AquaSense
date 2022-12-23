/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PVCPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PVCPipeSegment2Asset } from './entities/pvc-pipe-segment2-asset.entity';
import { PVCPipeSegment2Service } from './services/pvc-pipe-segment2.service';
import { PVCPipeSegment2Controller } from './controllers/pvc-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PVCPipeSegment2Asset])],
  controllers: [PVCPipeSegment2Controller],
  providers: [PVCPipeSegment2Service],
  exports: [PVCPipeSegment2Service],
})
export class PVCPipeSegment2Module {}
