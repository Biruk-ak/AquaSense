/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WaterQualityRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterQualityRequest1Case } from './entities/water-quality-request1-case.entity';
import { WaterQualityRequest1Service } from './services/water-quality-request1.service';
import { WaterQualityRequest1Controller } from './controllers/water-quality-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WaterQualityRequest1Case])],
  controllers: [WaterQualityRequest1Controller],
  providers: [WaterQualityRequest1Service],
  exports: [WaterQualityRequest1Service],
})
export class WaterQualityRequest1Module {}
