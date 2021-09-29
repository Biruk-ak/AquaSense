/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InlandDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InlandDistrictProfile } from './entities/inland-district-profile.entity';
import { InlandDistrictService } from './services/inland-district.service';
import { InlandDistrictController } from './controllers/inland-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InlandDistrictProfile])],
  controllers: [InlandDistrictController],
  providers: [InlandDistrictService],
  exports: [InlandDistrictService],
})
export class InlandDistrictModule {}
