/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone05
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone05Alert } from './entities/leak-zone05-alert.entity';
import { LeakZone05Service } from './services/leak-zone05.service';
import { LeakZone05Controller } from './controllers/leak-zone05.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone05Alert])],
  controllers: [LeakZone05Controller],
  providers: [LeakZone05Service],
  exports: [LeakZone05Service],
})
export class LeakZone05Module {}
