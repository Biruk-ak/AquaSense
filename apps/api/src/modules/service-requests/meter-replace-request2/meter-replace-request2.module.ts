/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MeterReplaceRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterReplaceRequest2Case } from './entities/meter-replace-request2-case.entity';
import { MeterReplaceRequest2Service } from './services/meter-replace-request2.service';
import { MeterReplaceRequest2Controller } from './controllers/meter-replace-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeterReplaceRequest2Case])],
  controllers: [MeterReplaceRequest2Controller],
  providers: [MeterReplaceRequest2Service],
  exports: [MeterReplaceRequest2Service],
})
export class MeterReplaceRequest2Module {}
