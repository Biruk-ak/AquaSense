/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: DuctileIronPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuctileIronPipeSegment2Asset } from './entities/ductile-iron-pipe-segment2-asset.entity';
import { DuctileIronPipeSegment2Service } from './services/ductile-iron-pipe-segment2.service';
import { DuctileIronPipeSegment2Controller } from './controllers/ductile-iron-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DuctileIronPipeSegment2Asset])],
  controllers: [DuctileIronPipeSegment2Controller],
  providers: [DuctileIronPipeSegment2Service],
  exports: [DuctileIronPipeSegment2Service],
})
export class DuctileIronPipeSegment2Module {}
