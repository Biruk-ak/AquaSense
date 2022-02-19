/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone24
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone24Alert } from './entities/leak-zone24-alert.entity';
import { LeakZone24Service } from './services/leak-zone24.service';
import { LeakZone24Controller } from './controllers/leak-zone24.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone24Alert])],
  controllers: [LeakZone24Controller],
  providers: [LeakZone24Service],
  exports: [LeakZone24Service],
})
export class LeakZone24Module {}
