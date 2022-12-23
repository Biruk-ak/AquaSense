/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IntakeAsset1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntakeAsset1Record } from './entities/intake-asset1-record.entity';
import { IntakeAsset1Service } from './services/intake-asset1.service';
import { IntakeAsset1Controller } from './controllers/intake-asset1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IntakeAsset1Record])],
  controllers: [IntakeAsset1Controller],
  providers: [IntakeAsset1Service],
  exports: [IntakeAsset1Service],
})
export class IntakeAsset1Module {}
