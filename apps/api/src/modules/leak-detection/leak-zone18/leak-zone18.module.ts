/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone18
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone18Alert } from './entities/leak-zone18-alert.entity';
import { LeakZone18Service } from './services/leak-zone18.service';
import { LeakZone18Controller } from './controllers/leak-zone18.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone18Alert])],
  controllers: [LeakZone18Controller],
  providers: [LeakZone18Service],
  exports: [LeakZone18Service],
})
export class LeakZone18Module {}
