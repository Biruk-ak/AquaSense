/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ValveExerciseWorkOrder3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveExerciseWorkOrder3Ticket } from './entities/valve-exercise-work-order3-ticket.entity';
import { ValveExerciseWorkOrder3Service } from './services/valve-exercise-work-order3.service';
import { ValveExerciseWorkOrder3Controller } from './controllers/valve-exercise-work-order3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValveExerciseWorkOrder3Ticket])],
  controllers: [ValveExerciseWorkOrder3Controller],
  providers: [ValveExerciseWorkOrder3Service],
  exports: [ValveExerciseWorkOrder3Service],
})
export class ValveExerciseWorkOrder3Module {}
