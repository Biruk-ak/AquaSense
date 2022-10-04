/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: DisconnectionRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisconnectionRequest1Case } from './entities/disconnection-request1-case.entity';
import { DisconnectionRequest1Service } from './services/disconnection-request1.service';
import { DisconnectionRequest1Controller } from './controllers/disconnection-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DisconnectionRequest1Case])],
  controllers: [DisconnectionRequest1Controller],
  providers: [DisconnectionRequest1Service],
  exports: [DisconnectionRequest1Service],
})
export class DisconnectionRequest1Module {}
