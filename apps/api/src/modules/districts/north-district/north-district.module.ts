/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: NorthDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NorthDistrictProfile } from './entities/north-district-profile.entity';
import { NorthDistrictService } from './services/north-district.service';
import { NorthDistrictController } from './controllers/north-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NorthDistrictProfile])],
  controllers: [NorthDistrictController],
  providers: [NorthDistrictService],
  exports: [NorthDistrictService],
})
export class NorthDistrictModule {}
