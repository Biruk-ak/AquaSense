/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone19
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone19Alert } from './entities/leak-zone19-alert.entity';
import { LeakZone19Service } from './services/leak-zone19.service';
import { LeakZone19Controller } from './controllers/leak-zone19.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone19Alert])],
  controllers: [LeakZone19Controller],
  providers: [LeakZone19Service],
  exports: [LeakZone19Service],
})
export class LeakZone19Module {}
