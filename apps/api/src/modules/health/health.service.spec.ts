/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Health tests
 * @copyright Biruk-ak
 */

import { HealthService } from './health.service';

describe('HealthService', () => {
  it('returns ok status', () => {
    const svc = new HealthService();
    const result = svc.check();
    expect(result.status).toBe('ok');
    expect(result.service).toContain('AquaSense');
  });
});
