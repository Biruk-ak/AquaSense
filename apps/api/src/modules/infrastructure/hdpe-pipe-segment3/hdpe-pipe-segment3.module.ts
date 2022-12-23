/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HDPEPipeSegment3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HDPEPipeSegment3Asset } from './entities/hdpe-pipe-segment3-asset.entity';
import { HDPEPipeSegment3Service } from './services/hdpe-pipe-segment3.service';
import { HDPEPipeSegment3Controller } from './controllers/hdpe-pipe-segment3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HDPEPipeSegment3Asset])],
  controllers: [HDPEPipeSegment3Controller],
  providers: [HDPEPipeSegment3Service],
  exports: [HDPEPipeSegment3Service],
})
export class HDPEPipeSegment3Module {}
