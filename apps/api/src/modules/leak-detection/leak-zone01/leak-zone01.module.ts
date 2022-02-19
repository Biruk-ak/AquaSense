/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone01
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone01Alert } from './entities/leak-zone01-alert.entity';
import { LeakZone01Service } from './services/leak-zone01.service';
import { LeakZone01Controller } from './controllers/leak-zone01.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone01Alert])],
  controllers: [LeakZone01Controller],
  providers: [LeakZone01Service],
  exports: [LeakZone01Service],
})
export class LeakZone01Module {}
