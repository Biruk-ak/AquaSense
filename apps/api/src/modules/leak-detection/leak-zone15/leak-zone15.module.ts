/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone15
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone15Alert } from './entities/leak-zone15-alert.entity';
import { LeakZone15Service } from './services/leak-zone15.service';
import { LeakZone15Controller } from './controllers/leak-zone15.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone15Alert])],
  controllers: [LeakZone15Controller],
  providers: [LeakZone15Service],
  exports: [LeakZone15Service],
})
export class LeakZone15Module {}
