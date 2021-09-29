/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: DowntownDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DowntownDistrictProfile } from './entities/downtown-district-profile.entity';
import { DowntownDistrictService } from './services/downtown-district.service';
import { DowntownDistrictController } from './controllers/downtown-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DowntownDistrictProfile])],
  controllers: [DowntownDistrictController],
  providers: [DowntownDistrictService],
  exports: [DowntownDistrictService],
})
export class DowntownDistrictModule {}
