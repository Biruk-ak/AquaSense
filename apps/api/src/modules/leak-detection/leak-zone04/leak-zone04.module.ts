/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone04
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone04Alert } from './entities/leak-zone04-alert.entity';
import { LeakZone04Service } from './services/leak-zone04.service';
import { LeakZone04Controller } from './controllers/leak-zone04.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone04Alert])],
  controllers: [LeakZone04Controller],
  providers: [LeakZone04Service],
  exports: [LeakZone04Service],
})
export class LeakZone04Module {}
