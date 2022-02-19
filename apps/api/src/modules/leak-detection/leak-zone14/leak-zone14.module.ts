/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone14
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone14Alert } from './entities/leak-zone14-alert.entity';
import { LeakZone14Service } from './services/leak-zone14.service';
import { LeakZone14Controller } from './controllers/leak-zone14.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone14Alert])],
  controllers: [LeakZone14Controller],
  providers: [LeakZone14Service],
  exports: [LeakZone14Service],
})
export class LeakZone14Module {}
