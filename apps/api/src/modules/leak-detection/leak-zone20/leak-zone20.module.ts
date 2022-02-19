/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone20
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone20Alert } from './entities/leak-zone20-alert.entity';
import { LeakZone20Service } from './services/leak-zone20.service';
import { LeakZone20Controller } from './controllers/leak-zone20.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone20Alert])],
  controllers: [LeakZone20Controller],
  providers: [LeakZone20Service],
  exports: [LeakZone20Service],
})
export class LeakZone20Module {}
