/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MoveInRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoveInRequest2Case } from './entities/move-in-request2-case.entity';
import { MoveInRequest2Service } from './services/move-in-request2.service';
import { MoveInRequest2Controller } from './controllers/move-in-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MoveInRequest2Case])],
  controllers: [MoveInRequest2Controller],
  providers: [MoveInRequest2Service],
  exports: [MoveInRequest2Service],
})
export class MoveInRequest2Module {}
