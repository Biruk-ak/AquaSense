/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WaterQualityRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterQualityRequest2Case } from './entities/water-quality-request2-case.entity';
import { WaterQualityRequest2Service } from './services/water-quality-request2.service';
import { WaterQualityRequest2Controller } from './controllers/water-quality-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WaterQualityRequest2Case])],
  controllers: [WaterQualityRequest2Controller],
  providers: [WaterQualityRequest2Service],
  exports: [WaterQualityRequest2Service],
})
export class WaterQualityRequest2Module {}
