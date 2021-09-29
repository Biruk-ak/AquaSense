/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: MidtownDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MidtownDistrictProfile } from './entities/midtown-district-profile.entity';
import { MidtownDistrictService } from './services/midtown-district.service';
import { MidtownDistrictController } from './controllers/midtown-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MidtownDistrictProfile])],
  controllers: [MidtownDistrictController],
  providers: [MidtownDistrictService],
  exports: [MidtownDistrictService],
})
export class MidtownDistrictModule {}
