/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone08
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone08Alert } from './entities/leak-zone08-alert.entity';
import { LeakZone08Service } from './services/leak-zone08.service';
import { LeakZone08Controller } from './controllers/leak-zone08.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone08Alert])],
  controllers: [LeakZone08Controller],
  providers: [LeakZone08Service],
  exports: [LeakZone08Service],
})
export class LeakZone08Module {}
