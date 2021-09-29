/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WestDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WestDistrictProfile } from './entities/west-district-profile.entity';
import { WestDistrictService } from './services/west-district.service';
import { WestDistrictController } from './controllers/west-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WestDistrictProfile])],
  controllers: [WestDistrictController],
  providers: [WestDistrictService],
  exports: [WestDistrictService],
})
export class WestDistrictModule {}
