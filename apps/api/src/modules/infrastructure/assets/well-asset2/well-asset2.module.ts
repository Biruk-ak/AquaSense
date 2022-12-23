/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WellAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WellAsset2Record } from './entities/well-asset2-record.entity';
import { WellAsset2Service } from './services/well-asset2.service';
import { WellAsset2Controller } from './controllers/well-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WellAsset2Record])],
  controllers: [WellAsset2Controller],
  providers: [WellAsset2Service],
  exports: [WellAsset2Service],
})
export class WellAsset2Module {}
