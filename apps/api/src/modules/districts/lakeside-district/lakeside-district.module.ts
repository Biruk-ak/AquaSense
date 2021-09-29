/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: LakesideDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LakesideDistrictProfile } from './entities/lakeside-district-profile.entity';
import { LakesideDistrictService } from './services/lakeside-district.service';
import { LakesideDistrictController } from './controllers/lakeside-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LakesideDistrictProfile])],
  controllers: [LakesideDistrictController],
  providers: [LakesideDistrictService],
  exports: [LakesideDistrictService],
})
export class LakesideDistrictModule {}
