/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NewConnectionRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewConnectionRequest1Case } from './entities/new-connection-request1-case.entity';
import { NewConnectionRequest1Service } from './services/new-connection-request1.service';
import { NewConnectionRequest1Controller } from './controllers/new-connection-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NewConnectionRequest1Case])],
  controllers: [NewConnectionRequest1Controller],
  providers: [NewConnectionRequest1Service],
  exports: [NewConnectionRequest1Service],
})
export class NewConnectionRequest1Module {}
