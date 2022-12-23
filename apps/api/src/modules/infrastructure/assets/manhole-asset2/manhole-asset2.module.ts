/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ManholeAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManholeAsset2Record } from './entities/manhole-asset2-record.entity';
import { ManholeAsset2Service } from './services/manhole-asset2.service';
import { ManholeAsset2Controller } from './controllers/manhole-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ManholeAsset2Record])],
  controllers: [ManholeAsset2Controller],
  providers: [ManholeAsset2Service],
  exports: [ManholeAsset2Service],
})
export class ManholeAsset2Module {}
