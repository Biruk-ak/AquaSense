/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ValveAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveAsset2Record } from './entities/valve-asset2-record.entity';
import { ValveAsset2Service } from './services/valve-asset2.service';
import { ValveAsset2Controller } from './controllers/valve-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValveAsset2Record])],
  controllers: [ValveAsset2Controller],
  providers: [ValveAsset2Service],
  exports: [ValveAsset2Service],
})
export class ValveAsset2Module {}
