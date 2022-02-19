/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone12
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone12Alert } from './entities/leak-zone12-alert.entity';
import { LeakZone12Service } from './services/leak-zone12.service';
import { LeakZone12Controller } from './controllers/leak-zone12.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone12Alert])],
  controllers: [LeakZone12Controller],
  providers: [LeakZone12Service],
  exports: [LeakZone12Service],
})
export class LeakZone12Module {}
