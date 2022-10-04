/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NoWaterRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoWaterRequest1Case } from './entities/no-water-request1-case.entity';
import { NoWaterRequest1Service } from './services/no-water-request1.service';
import { NoWaterRequest1Controller } from './controllers/no-water-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NoWaterRequest1Case])],
  controllers: [NoWaterRequest1Controller],
  providers: [NoWaterRequest1Service],
  exports: [NoWaterRequest1Service],
})
export class NoWaterRequest1Module {}
