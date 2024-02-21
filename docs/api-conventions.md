# API Conventions

- Base path: `/api/v1`
- Auth: Bearer JWT
- Pagination: `page`, `limit` (max 100)
- Mutations require `Admin` or `Operator` unless noted
- CSV export: `GET .../export/csv`
- Errors: NestJS HTTP exceptions with validation details
