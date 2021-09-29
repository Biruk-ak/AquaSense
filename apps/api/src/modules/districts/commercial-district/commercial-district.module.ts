/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CommercialDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialDistrictProfile } from './entities/commercial-district-profile.entity';
import { CommercialDistrictService } from './services/commercial-district.service';
import { CommercialDistrictController } from './controllers/commercial-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialDistrictProfile])],
  controllers: [CommercialDistrictController],
  providers: [CommercialDistrictService],
  exports: [CommercialDistrictService],
})
export class CommercialDistrictModule {}
