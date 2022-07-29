/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CalibrationWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalibrationWorkOrder2Ticket } from './entities/calibration-work-order2-ticket.entity';
import { CalibrationWorkOrder2Service } from './services/calibration-work-order2.service';
import { CalibrationWorkOrder2Controller } from './controllers/calibration-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CalibrationWorkOrder2Ticket])],
  controllers: [CalibrationWorkOrder2Controller],
  providers: [CalibrationWorkOrder2Service],
  exports: [CalibrationWorkOrder2Service],
})
export class CalibrationWorkOrder2Module {}
