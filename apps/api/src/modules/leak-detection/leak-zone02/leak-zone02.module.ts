/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LeakZone02
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeakZone02Alert } from './entities/leak-zone02-alert.entity';
import { LeakZone02Service } from './services/leak-zone02.service';
import { LeakZone02Controller } from './controllers/leak-zone02.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeakZone02Alert])],
  controllers: [LeakZone02Controller],
  providers: [LeakZone02Service],
  exports: [LeakZone02Service],
})
export class LeakZone02Module {}
