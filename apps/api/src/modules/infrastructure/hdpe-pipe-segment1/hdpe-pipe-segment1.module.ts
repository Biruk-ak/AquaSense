/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HDPEPipeSegment1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HDPEPipeSegment1Asset } from './entities/hdpe-pipe-segment1-asset.entity';
import { HDPEPipeSegment1Service } from './services/hdpe-pipe-segment1.service';
import { HDPEPipeSegment1Controller } from './controllers/hdpe-pipe-segment1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HDPEPipeSegment1Asset])],
  controllers: [HDPEPipeSegment1Controller],
  providers: [HDPEPipeSegment1Service],
  exports: [HDPEPipeSegment1Service],
})
export class HDPEPipeSegment1Module {}
