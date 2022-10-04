/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: DisconnectionRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisconnectionRequest2Case } from './entities/disconnection-request2-case.entity';
import { DisconnectionRequest2Service } from './services/disconnection-request2.service';
import { DisconnectionRequest2Controller } from './controllers/disconnection-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DisconnectionRequest2Case])],
  controllers: [DisconnectionRequest2Controller],
  providers: [DisconnectionRequest2Service],
  exports: [DisconnectionRequest2Service],
})
export class DisconnectionRequest2Module {}
