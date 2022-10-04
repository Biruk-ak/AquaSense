/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NewConnectionRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewConnectionRequest2Case } from './entities/new-connection-request2-case.entity';
import { NewConnectionRequest2Service } from './services/new-connection-request2.service';
import { NewConnectionRequest2Controller } from './controllers/new-connection-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NewConnectionRequest2Case])],
  controllers: [NewConnectionRequest2Controller],
  providers: [NewConnectionRequest2Service],
  exports: [NewConnectionRequest2Service],
})
export class NewConnectionRequest2Module {}
