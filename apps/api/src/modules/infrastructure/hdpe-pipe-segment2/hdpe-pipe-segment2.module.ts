/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HDPEPipeSegment2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HDPEPipeSegment2Asset } from './entities/hdpe-pipe-segment2-asset.entity';
import { HDPEPipeSegment2Service } from './services/hdpe-pipe-segment2.service';
import { HDPEPipeSegment2Controller } from './controllers/hdpe-pipe-segment2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HDPEPipeSegment2Asset])],
  controllers: [HDPEPipeSegment2Controller],
  providers: [HDPEPipeSegment2Service],
  exports: [HDPEPipeSegment2Service],
})
export class HDPEPipeSegment2Module {}
