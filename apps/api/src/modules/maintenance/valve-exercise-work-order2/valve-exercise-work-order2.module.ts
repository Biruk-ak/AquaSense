/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ValveExerciseWorkOrder2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveExerciseWorkOrder2Ticket } from './entities/valve-exercise-work-order2-ticket.entity';
import { ValveExerciseWorkOrder2Service } from './services/valve-exercise-work-order2.service';
import { ValveExerciseWorkOrder2Controller } from './controllers/valve-exercise-work-order2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValveExerciseWorkOrder2Ticket])],
  controllers: [ValveExerciseWorkOrder2Controller],
  providers: [ValveExerciseWorkOrder2Service],
  exports: [ValveExerciseWorkOrder2Service],
})
export class ValveExerciseWorkOrder2Module {}
