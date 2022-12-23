/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IntakeAsset2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntakeAsset2Record } from './entities/intake-asset2-record.entity';
import { IntakeAsset2Service } from './services/intake-asset2.service';
import { IntakeAsset2Controller } from './controllers/intake-asset2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IntakeAsset2Record])],
  controllers: [IntakeAsset2Controller],
  providers: [IntakeAsset2Service],
  exports: [IntakeAsset2Service],
})
export class IntakeAsset2Module {}
