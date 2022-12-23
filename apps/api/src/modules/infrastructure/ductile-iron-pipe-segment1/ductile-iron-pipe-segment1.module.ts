/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: DuctileIronPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuctileIronPipeSegment1Asset } from './entities/ductile-iron-pipe-segment1-asset.entity';
import { DuctileIronPipeSegment1Service } from './services/ductile-iron-pipe-segment1.service';
import { DuctileIronPipeSegment1Controller } from './controllers/ductile-iron-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DuctileIronPipeSegment1Asset])],
  controllers: [DuctileIronPipeSegment1Controller],
  providers: [DuctileIronPipeSegment1Service],
  exports: [DuctileIronPipeSegment1Service],
})
export class DuctileIronPipeSegment1Module {}
