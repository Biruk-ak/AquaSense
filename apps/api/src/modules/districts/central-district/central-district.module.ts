/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CentralDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentralDistrictProfile } from './entities/central-district-profile.entity';
import { CentralDistrictService } from './services/central-district.service';
import { CentralDistrictController } from './controllers/central-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CentralDistrictProfile])],
  controllers: [CentralDistrictController],
  providers: [CentralDistrictService],
  exports: [CentralDistrictService],
})
export class CentralDistrictModule {}
