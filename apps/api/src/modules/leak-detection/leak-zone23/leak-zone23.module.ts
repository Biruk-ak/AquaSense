/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone23
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone23Alert } from './entities/leak-zone23-alert.entity';
import { LeakZone23Service } from './services/leak-zone23.service';
import { LeakZone23Controller } from './controllers/leak-zone23.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone23Alert])],
  controllers: [LeakZone23Controller],
  providers: [LeakZone23Service],
  exports: [LeakZone23Service],
})
export class LeakZone23Module {}
