/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone17
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone17Alert } from './entities/leak-zone17-alert.entity';
import { LeakZone17Service } from './services/leak-zone17.service';
import { LeakZone17Controller } from './controllers/leak-zone17.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone17Alert])],
  controllers: [LeakZone17Controller],
  providers: [LeakZone17Service],
  exports: [LeakZone17Service],
})
export class LeakZone17Module {}
