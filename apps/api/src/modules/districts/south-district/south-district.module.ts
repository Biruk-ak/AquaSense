/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SouthDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SouthDistrictProfile } from './entities/south-district-profile.entity';
import { SouthDistrictService } from './services/south-district.service';
import { SouthDistrictController } from './controllers/south-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SouthDistrictProfile])],
  controllers: [SouthDistrictController],
  providers: [SouthDistrictService],
  exports: [SouthDistrictService],
})
export class SouthDistrictModule {}
