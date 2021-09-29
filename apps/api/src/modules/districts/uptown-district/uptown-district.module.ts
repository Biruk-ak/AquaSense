/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: UptownDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UptownDistrictProfile } from './entities/uptown-district-profile.entity';
import { UptownDistrictService } from './services/uptown-district.service';
import { UptownDistrictController } from './controllers/uptown-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UptownDistrictProfile])],
  controllers: [UptownDistrictController],
  providers: [UptownDistrictService],
  exports: [UptownDistrictService],
})
export class UptownDistrictModule {}
