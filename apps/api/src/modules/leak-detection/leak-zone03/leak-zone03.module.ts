/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone03
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone03Alert } from './entities/leak-zone03-alert.entity';
import { LeakZone03Service } from './services/leak-zone03.service';
import { LeakZone03Controller } from './controllers/leak-zone03.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone03Alert])],
  controllers: [LeakZone03Controller],
  providers: [LeakZone03Service],
  exports: [LeakZone03Service],
})
export class LeakZone03Module {}
