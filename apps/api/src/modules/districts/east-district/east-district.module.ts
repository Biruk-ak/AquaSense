/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EastDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EastDistrictProfile } from './entities/east-district-profile.entity';
import { EastDistrictService } from './services/east-district.service';
import { EastDistrictController } from './controllers/east-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EastDistrictProfile])],
  controllers: [EastDistrictController],
  providers: [EastDistrictService],
  exports: [EastDistrictService],
})
export class EastDistrictModule {}
