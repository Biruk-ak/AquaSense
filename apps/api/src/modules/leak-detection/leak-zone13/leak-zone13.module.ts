/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone13
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone13Alert } from './entities/leak-zone13-alert.entity';
import { LeakZone13Service } from './services/leak-zone13.service';
import { LeakZone13Controller } from './controllers/leak-zone13.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone13Alert])],
  controllers: [LeakZone13Controller],
  providers: [LeakZone13Service],
  exports: [LeakZone13Service],
})
export class LeakZone13Module {}
