/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ValveAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveAsset1Record } from './entities/valve-asset1-record.entity';
import { ValveAsset1Service } from './services/valve-asset1.service';
import { ValveAsset1Controller } from './controllers/valve-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValveAsset1Record])],
  controllers: [ValveAsset1Controller],
  providers: [ValveAsset1Service],
  exports: [ValveAsset1Service],
})
export class ValveAsset1Module {}
