/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Health service
 * @copyright Biruk-ak
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      status: 'ok',
      service: 'AquaSense API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
