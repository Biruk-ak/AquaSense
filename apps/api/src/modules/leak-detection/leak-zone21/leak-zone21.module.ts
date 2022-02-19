/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone21
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone21Alert } from './entities/leak-zone21-alert.entity';
import { LeakZone21Service } from './services/leak-zone21.service';
import { LeakZone21Controller } from './controllers/leak-zone21.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone21Alert])],
  controllers: [LeakZone21Controller],
  providers: [LeakZone21Service],
  exports: [LeakZone21Service],
})
export class LeakZone21Module {}
