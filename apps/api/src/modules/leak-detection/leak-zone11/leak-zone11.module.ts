/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone11
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone11Alert } from './entities/leak-zone11-alert.entity';
import { LeakZone11Service } from './services/leak-zone11.service';
import { LeakZone11Controller } from './controllers/leak-zone11.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone11Alert])],
  controllers: [LeakZone11Controller],
  providers: [LeakZone11Service],
  exports: [LeakZone11Service],
})
export class LeakZone11Module {}
