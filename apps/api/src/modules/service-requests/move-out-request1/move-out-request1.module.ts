/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MoveOutRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoveOutRequest1Case } from './entities/move-out-request1-case.entity';
import { MoveOutRequest1Service } from './services/move-out-request1.service';
import { MoveOutRequest1Controller } from './controllers/move-out-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MoveOutRequest1Case])],
  controllers: [MoveOutRequest1Controller],
  providers: [MoveOutRequest1Service],
  exports: [MoveOutRequest1Service],
})
export class MoveOutRequest1Module {}
