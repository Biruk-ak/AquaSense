# ADR 0001: NestJS + PostgreSQL monorepo

## Status
Accepted — 2023-05-12

## Context
AquaSense needs a modular backend for meters, leaks, billing, and ops portals.

## Decision
Use a TypeScript monorepo with NestJS API, TypeORM/PostgreSQL, and React portals.

## Consequences
Shared libs (`common`, `domain`, `database`) keep RBAC and hydraulic logic consistent.
