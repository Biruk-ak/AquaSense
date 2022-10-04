/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MoveOutRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoveOutRequest2Case } from './entities/move-out-request2-case.entity';
import { MoveOutRequest2Service } from './services/move-out-request2.service';
import { MoveOutRequest2Controller } from './controllers/move-out-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MoveOutRequest2Case])],
  controllers: [MoveOutRequest2Controller],
  providers: [MoveOutRequest2Service],
  exports: [MoveOutRequest2Service],
})
export class MoveOutRequest2Module {}
