/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: RiversideDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiversideDistrictProfile } from './entities/riverside-district-profile.entity';
import { RiversideDistrictService } from './services/riverside-district.service';
import { RiversideDistrictController } from './controllers/riverside-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RiversideDistrictProfile])],
  controllers: [RiversideDistrictController],
  providers: [RiversideDistrictService],
  exports: [RiversideDistrictService],
})
export class RiversideDistrictModule {}
