/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NoWaterRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoWaterRequest2Case } from './entities/no-water-request2-case.entity';
import { NoWaterRequest2Service } from './services/no-water-request2.service';
import { NoWaterRequest2Controller } from './controllers/no-water-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NoWaterRequest2Case])],
  controllers: [NoWaterRequest2Controller],
  providers: [NoWaterRequest2Service],
  exports: [NoWaterRequest2Service],
})
export class NoWaterRequest2Module {}
