/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Health module
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({ controllers: [HealthController], providers: [HealthService] })
export class HealthModule {}
