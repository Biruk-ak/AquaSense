/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone09
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone09Alert } from './entities/leak-zone09-alert.entity';
import { LeakZone09Service } from './services/leak-zone09.service';
import { LeakZone09Controller } from './controllers/leak-zone09.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone09Alert])],
  controllers: [LeakZone09Controller],
  providers: [LeakZone09Service],
  exports: [LeakZone09Service],
})
export class LeakZone09Module {}
