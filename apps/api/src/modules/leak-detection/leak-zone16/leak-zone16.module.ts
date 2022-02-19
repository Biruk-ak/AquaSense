/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone16
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone16Alert } from './entities/leak-zone16-alert.entity';
import { LeakZone16Service } from './services/leak-zone16.service';
import { LeakZone16Controller } from './controllers/leak-zone16.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone16Alert])],
  controllers: [LeakZone16Controller],
  providers: [LeakZone16Service],
  exports: [LeakZone16Service],
})
export class LeakZone16Module {}
