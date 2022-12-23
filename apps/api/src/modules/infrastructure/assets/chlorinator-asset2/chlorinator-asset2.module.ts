/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ChlorinatorAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChlorinatorAsset2Record } from './entities/chlorinator-asset2-record.entity';
import { ChlorinatorAsset2Service } from './services/chlorinator-asset2.service';
import { ChlorinatorAsset2Controller } from './controllers/chlorinator-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChlorinatorAsset2Record])],
  controllers: [ChlorinatorAsset2Controller],
  providers: [ChlorinatorAsset2Service],
  exports: [ChlorinatorAsset2Service],
})
export class ChlorinatorAsset2Module {}
