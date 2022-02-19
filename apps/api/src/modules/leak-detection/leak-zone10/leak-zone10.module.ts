/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone10
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone10Alert } from './entities/leak-zone10-alert.entity';
import { LeakZone10Service } from './services/leak-zone10.service';
import { LeakZone10Controller } from './controllers/leak-zone10.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone10Alert])],
  controllers: [LeakZone10Controller],
  providers: [LeakZone10Service],
  exports: [LeakZone10Service],
})
export class LeakZone10Module {}
