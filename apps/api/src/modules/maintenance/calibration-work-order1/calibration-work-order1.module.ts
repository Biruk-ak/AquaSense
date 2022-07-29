/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: CalibrationWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalibrationWorkOrder1Ticket } from './entities/calibration-work-order1-ticket.entity';
import { CalibrationWorkOrder1Service } from './services/calibration-work-order1.service';
import { CalibrationWorkOrder1Controller } from './controllers/calibration-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CalibrationWorkOrder1Ticket])],
  controllers: [CalibrationWorkOrder1Controller],
  providers: [CalibrationWorkOrder1Service],
  exports: [CalibrationWorkOrder1Service],
})
export class CalibrationWorkOrder1Module {}
