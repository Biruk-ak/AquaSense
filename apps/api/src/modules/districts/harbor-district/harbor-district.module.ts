/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HarborDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HarborDistrictProfile } from './entities/harbor-district-profile.entity';
import { HarborDistrictService } from './services/harbor-district.service';
import { HarborDistrictController } from './controllers/harbor-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HarborDistrictProfile])],
  controllers: [HarborDistrictController],
  providers: [HarborDistrictService],
  exports: [HarborDistrictService],
})
export class HarborDistrictModule {}
