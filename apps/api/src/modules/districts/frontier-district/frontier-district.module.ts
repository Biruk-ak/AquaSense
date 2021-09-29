/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: FrontierDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrontierDistrictProfile } from './entities/frontier-district-profile.entity';
import { FrontierDistrictService } from './services/frontier-district.service';
import { FrontierDistrictController } from './controllers/frontier-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FrontierDistrictProfile])],
  controllers: [FrontierDistrictController],
  providers: [FrontierDistrictService],
  exports: [FrontierDistrictService],
})
export class FrontierDistrictModule {}
