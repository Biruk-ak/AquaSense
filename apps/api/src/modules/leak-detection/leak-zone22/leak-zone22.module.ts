/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone22
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone22Alert } from './entities/leak-zone22-alert.entity';
import { LeakZone22Service } from './services/leak-zone22.service';
import { LeakZone22Controller } from './controllers/leak-zone22.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone22Alert])],
  controllers: [LeakZone22Controller],
  providers: [LeakZone22Service],
  exports: [LeakZone22Service],
})
export class LeakZone22Module {}
