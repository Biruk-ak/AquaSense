/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: ValveExerciseWorkOrder1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveExerciseWorkOrder1Ticket } from './entities/valve-exercise-work-order1-ticket.entity';
import { ValveExerciseWorkOrder1Service } from './services/valve-exercise-work-order1.service';
import { ValveExerciseWorkOrder1Controller } from './controllers/valve-exercise-work-order1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValveExerciseWorkOrder1Ticket])],
  controllers: [ValveExerciseWorkOrder1Controller],
  providers: [ValveExerciseWorkOrder1Service],
  exports: [ValveExerciseWorkOrder1Service],
})
export class ValveExerciseWorkOrder1Module {}
