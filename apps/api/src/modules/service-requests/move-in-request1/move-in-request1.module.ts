/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MoveInRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoveInRequest1Case } from './entities/move-in-request1-case.entity';
import { MoveInRequest1Service } from './services/move-in-request1.service';
import { MoveInRequest1Controller } from './controllers/move-in-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MoveInRequest1Case])],
  controllers: [MoveInRequest1Controller],
  providers: [MoveInRequest1Service],
  exports: [MoveInRequest1Service],
})
export class MoveInRequest1Module {}
