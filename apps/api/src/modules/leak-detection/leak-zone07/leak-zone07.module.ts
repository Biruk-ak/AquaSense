/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone07
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone07Alert } from './entities/leak-zone07-alert.entity';
import { LeakZone07Service } from './services/leak-zone07.service';
import { LeakZone07Controller } from './controllers/leak-zone07.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone07Alert])],
  controllers: [LeakZone07Controller],
  providers: [LeakZone07Service],
  exports: [LeakZone07Service],
})
export class LeakZone07Module {}
