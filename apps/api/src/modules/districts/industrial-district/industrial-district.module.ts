/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: IndustrialDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustrialDistrictProfile } from './entities/industrial-district-profile.entity';
import { IndustrialDistrictService } from './services/industrial-district.service';
import { IndustrialDistrictController } from './controllers/industrial-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndustrialDistrictProfile])],
  controllers: [IndustrialDistrictController],
  providers: [IndustrialDistrictService],
  exports: [IndustrialDistrictService],
})
export class IndustrialDistrictModule {}
