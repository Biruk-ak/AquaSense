/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PEPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PEPipeSegment2Asset } from './entities/pe-pipe-segment2-asset.entity';
import { PEPipeSegment2Service } from './services/pe-pipe-segment2.service';
import { PEPipeSegment2Controller } from './controllers/pe-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PEPipeSegment2Asset])],
  controllers: [PEPipeSegment2Controller],
  providers: [PEPipeSegment2Service],
  exports: [PEPipeSegment2Service],
})
export class PEPipeSegment2Module {}
