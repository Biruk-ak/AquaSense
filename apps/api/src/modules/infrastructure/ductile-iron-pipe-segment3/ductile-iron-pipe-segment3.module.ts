/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: DuctileIronPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuctileIronPipeSegment3Asset } from './entities/ductile-iron-pipe-segment3-asset.entity';
import { DuctileIronPipeSegment3Service } from './services/ductile-iron-pipe-segment3.service';
import { DuctileIronPipeSegment3Controller } from './controllers/ductile-iron-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DuctileIronPipeSegment3Asset])],
  controllers: [DuctileIronPipeSegment3Controller],
  providers: [DuctileIronPipeSegment3Service],
  exports: [DuctileIronPipeSegment3Service],
})
export class DuctileIronPipeSegment3Module {}
