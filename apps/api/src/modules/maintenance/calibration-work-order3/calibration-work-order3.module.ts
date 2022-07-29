/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CalibrationWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalibrationWorkOrder3Ticket } from './entities/calibration-work-order3-ticket.entity';
import { CalibrationWorkOrder3Service } from './services/calibration-work-order3.service';
import { CalibrationWorkOrder3Controller } from './controllers/calibration-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CalibrationWorkOrder3Ticket])],
  controllers: [CalibrationWorkOrder3Controller],
  providers: [CalibrationWorkOrder3Service],
  exports: [CalibrationWorkOrder3Service],
})
export class CalibrationWorkOrder3Module {}
