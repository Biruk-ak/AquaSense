/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterReplaceRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterReplaceRequest1Case } from './entities/meter-replace-request1-case.entity';
import { MeterReplaceRequest1Service } from './services/meter-replace-request1.service';
import { MeterReplaceRequest1Controller } from './controllers/meter-replace-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterReplaceRequest1Case])],
  controllers: [MeterReplaceRequest1Controller],
  providers: [MeterReplaceRequest1Service],
  exports: [MeterReplaceRequest1Service],
})
export class MeterReplaceRequest1Module {}
