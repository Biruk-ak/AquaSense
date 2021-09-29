/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: HighlandDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighlandDistrictProfile } from './entities/highland-district-profile.entity';
import { HighlandDistrictService } from './services/highland-district.service';
import { HighlandDistrictController } from './controllers/highland-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HighlandDistrictProfile])],
  controllers: [HighlandDistrictController],
  providers: [HighlandDistrictService],
  exports: [HighlandDistrictService],
})
export class HighlandDistrictModule {}
