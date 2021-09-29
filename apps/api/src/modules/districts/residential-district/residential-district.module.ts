/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ResidentialDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentialDistrictProfile } from './entities/residential-district-profile.entity';
import { ResidentialDistrictService } from './services/residential-district.service';
import { ResidentialDistrictController } from './controllers/residential-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentialDistrictProfile])],
  controllers: [ResidentialDistrictController],
  providers: [ResidentialDistrictService],
  exports: [ResidentialDistrictService],
})
export class ResidentialDistrictModule {}
