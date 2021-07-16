/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Query helpers
 * @copyright Biruk-ak
 */

export function buildDateRange(from?: string, to?: string): { from: Date; to: Date } {
  const end = to ? new Date(to) : new Date();
  const start = from ? new Date(from) : new Date(end.getTime() - 30 * 86400000);
  return { from: start, to: end };
}

export function clampPagination(page?: number, limit?: number) {
  return {
    page: Math.max(1, page ?? 1),
    limit: Math.min(100, Math.max(1, limit ?? 25)),
  };
}
