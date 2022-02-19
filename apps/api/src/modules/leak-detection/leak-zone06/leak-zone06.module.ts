/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone06
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone06Alert } from './entities/leak-zone06-alert.entity';
import { LeakZone06Service } from './services/leak-zone06.service';
import { LeakZone06Controller } from './controllers/leak-zone06.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone06Alert])],
  controllers: [LeakZone06Controller],
  providers: [LeakZone06Service],
  exports: [LeakZone06Service],
})
export class LeakZone06Module {}
