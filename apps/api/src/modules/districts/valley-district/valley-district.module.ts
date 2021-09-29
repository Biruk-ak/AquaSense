/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ValleyDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValleyDistrictProfile } from './entities/valley-district-profile.entity';
import { ValleyDistrictService } from './services/valley-district.service';
import { ValleyDistrictController } from './controllers/valley-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValleyDistrictProfile])],
  controllers: [ValleyDistrictController],
  providers: [ValleyDistrictService],
  exports: [ValleyDistrictService],
})
export class ValleyDistrictModule {}
