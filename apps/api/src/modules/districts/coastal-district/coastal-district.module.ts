/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CoastalDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoastalDistrictProfile } from './entities/coastal-district-profile.entity';
import { CoastalDistrictService } from './services/coastal-district.service';
import { CoastalDistrictController } from './controllers/coastal-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CoastalDistrictProfile])],
  controllers: [CoastalDistrictController],
  providers: [CoastalDistrictService],
  exports: [CoastalDistrictService],
})
export class CoastalDistrictModule {}
