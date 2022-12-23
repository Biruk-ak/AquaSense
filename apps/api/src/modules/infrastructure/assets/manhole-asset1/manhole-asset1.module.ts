/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ManholeAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManholeAsset1Record } from './entities/manhole-asset1-record.entity';
import { ManholeAsset1Service } from './services/manhole-asset1.service';
import { ManholeAsset1Controller } from './controllers/manhole-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ManholeAsset1Record])],
  controllers: [ManholeAsset1Controller],
  providers: [ManholeAsset1Service],
  exports: [ManholeAsset1Service],
})
export class ManholeAsset1Module {}
