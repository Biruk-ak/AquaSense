/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Pagination
 * @copyright Biruk-ak
 */

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
