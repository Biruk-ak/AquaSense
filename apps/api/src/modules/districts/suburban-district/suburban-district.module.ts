/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SuburbanDistrict
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuburbanDistrictProfile } from './entities/suburban-district-profile.entity';
import { SuburbanDistrictService } from './services/suburban-district.service';
import { SuburbanDistrictController } from './controllers/suburban-district.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SuburbanDistrictProfile])],
  controllers: [SuburbanDistrictController],
  providers: [SuburbanDistrictService],
  exports: [SuburbanDistrictService],
})
export class SuburbanDistrictModule {}
