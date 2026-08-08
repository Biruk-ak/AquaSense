# AquaSense

**Water Utility & Infrastructure Management Platform**

AquaSense is a full-stack TypeScript platform for water utilities: smart meter ingestion, leak detection, billing, field maintenance, consumer self-service, and operations analytics — backed by NestJS and PostgreSQL.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey)](./LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Applications](#applications)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Examples](#api-examples)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Author](#author)

---

## Overview

AquaSense connects AMI meter telemetry, district metered areas (DMAs), billing cycles, and field work orders into one operational system. Utilities can:

- Ingest and validate smart meter readings at scale
- Detect and prioritize leaks using night-flow and NRW signals
- Run tariff-tier billing and invoice workflows
- Dispatch preventive and emergency maintenance
- Serve consumers through a self-service portal
- Give operators and admins role-based dashboards

## Applications

| Application | Description |
|-------------|-------------|
| **API** (`apps/api`) | NestJS backend — auth, domains, TypeORM + PostgreSQL |
| **Consumer Portal** | Usage, bills, service requests, alerts |
| **Operations Dashboard** | Live network, leak board, work orders, field map |
| **Admin** | Users, tariffs, districts, audit log, reports |

## Features

- Smart Meter Readings (AMI batches, quality flags, tamper detection)
- Leak Detection (DMA zones, confidence scoring, resolution tracking)
- Billing (tiered tariffs, cycles, invoices, payments)
- Maintenance (preventive / corrective / emergency work orders)
- Service Requests (SLA-aware cases across common utility request types)
- Infrastructure Mapping (pipe segments, pumps, valves, hydrants, GIS-ready assets)
- Notifications (email, SMS, push, in-app, webhook templates)
- Analytics (consumption, revenue, NRW, pressure, response time, collection rate)

## Architecture

```
┌─────────────────┐  ┌──────────────────────┐  ┌─────────────┐
│ Consumer Portal │  │ Operations Dashboard │  │    Admin    │
└────────┬────────┘  └──────────┬───────────┘  └──────┬──────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                ▼
                     ┌─────────────────────┐
                     │   AquaSense API     │
                     │  NestJS + JWT RBAC  │
                     └──────────┬──────────┘
                                │
              ┌─────────────────┼─────────────────┐
              ▼                 ▼                 ▼
        PostgreSQL           Redis*          Domain libs
        (TypeORM)           (queues)      (hydraulics/NRW)
```

\* Redis is optional for local core API usage; included in `docker-compose.yml`.

## Tech Stack

- **Language:** TypeScript
- **Backend:** NestJS, Passport JWT, class-validator, Swagger
- **Database:** PostgreSQL via TypeORM
- **Frontends:** React + React Router
- **Testing:** Jest
- **Tooling:** Docker Compose, ESLint, Nest CLI

## Prerequisites

- Node.js **20+**
- npm **10+**
- Docker & Docker Compose (recommended for PostgreSQL)
- Git

## Installation

```bash
# 1. Clone
git clone git@github.com:Biruk-ak/AquaSense.git
cd AquaSense

# 2. Install dependencies
npm install

# 3. Environment
cp .env.example .env
# Edit DATABASE_* and JWT_SECRET as needed

# 4. Start PostgreSQL (and Redis)
docker compose up -d postgres redis

# 5. Run the API
npm run start:dev
```

API base URL: `http://localhost:3000/api/v1`  
Swagger docs: `http://localhost:3000/docs`

## Configuration

Key variables from `.env.example`:

| Variable | Purpose | Default |
|----------|---------|---------|
| `PORT` | API port | `3000` |
| `DATABASE_HOST` | Postgres host | `localhost` |
| `DATABASE_PORT` | Postgres port | `5432` |
| `DATABASE_USER` | DB user | `aquasense` |
| `DATABASE_PASSWORD` | DB password | `aquasense_dev` |
| `DATABASE_NAME` | Database name | `aquasense` |
| `JWT_SECRET` | JWT signing secret | *(change in production)* |
| `JWT_EXPIRES_IN` | Token lifetime | `8h` |

## Usage

### Start in development

```bash
npm run start:dev
```

### Build for production

```bash
npm run build
npm run start:prod
```

### Run migrations

```bash
npm run migration
```

### Frontends (workspaces)

```bash
npm run dev --workspace=@aquasense/consumer-portal
npm run dev --workspace=@aquasense/operations-dashboard
npm run dev --workspace=@aquasense/admin
```

## API Examples

### Health check

```bash
curl -s http://localhost:3000/api/v1/health | jq
```

Example response:

```json
{
  "status": "ok",
  "service": "AquaSense API",
  "timestamp": "2026-06-18T13:45:00.000Z",
  "uptime": 12.4
}
```

### Login

```bash
curl -s -X POST http://localhost:3000/api/v1/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"operator@utility.local","password":"password123"}' | jq
```

### Authenticated list (Bearer token)

```bash
TOKEN="<accessToken>"

curl -s "http://localhost:3000/api/v1/central-district?page=1&limit=25" \
  -H "Authorization: Bearer $TOKEN" | jq
```

### Export CSV

```bash
curl -s "http://localhost:3000/api/v1/central-district/export/csv" \
  -H "Authorization: Bearer $TOKEN" \
  -o districts.csv
```

## Testing

```bash
# Full suite
npm test

# Focused examples
npx jest apps/api/src/modules/health --maxWorkers=2
npx jest libs/domain/src/calculations --maxWorkers=2
```

## Project Structure

```
AquaSense/
├── apps/
│   ├── api/                    # NestJS API
│   ├── consumer-portal/        # Consumer React app
│   ├── operations-dashboard/   # Ops React app
│   └── admin/                  # Admin React app
├── libs/
│   ├── common/                 # RBAC, audit, event bus
│   ├── database/               # Naming strategy, query helpers
│   └── domain/                 # Hydraulic & telemetry processors
├── types/                      # Shared ambient typings
├── .github/                    # Issue & PR templates
├── docker-compose.yml
├── package.json
└── README.md
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for clone, local setup, coding standards, and pull request workflow.  
Please use the issue templates under `.github/ISSUE_TEMPLATE/` when reporting bugs or requesting features.

## Author

**Biruk-ak** — [GitHub](https://github.com/Biruk-ak) · birukaklilu0110@gmail.com

---

© Biruk-ak. All rights reserved.
