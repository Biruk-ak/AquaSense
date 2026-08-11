# Contributing to AquaSense

Thank you for contributing to AquaSense. This guide explains how to set up the project locally, make changes, and open pull requests.

## Code of Conduct

Be respectful in issues and pull requests. Focus feedback on the code and product outcomes. Do not include secrets, customer data, or production credentials in any contribution.

## Ways to Contribute

- Report bugs using the **Bug report** issue template
- Propose features using the **Feature request** issue template
- Improve documentation (README, guides, API examples)
- Fix bugs or add tests around NestJS modules and domain processors
- Improve Consumer Portal, Operations Dashboard, or Admin UX

## Prerequisites

- Node.js 20+
- npm 10+
- Docker Desktop (or Docker Engine + Compose) for PostgreSQL
- A GitHub account with SSH access configured for `git@github.com`

## Clone and Run

```bash
git clone git@github.com:Biruk-ak/AquaSense.git
cd AquaSense
npm install
cp .env.example .env
docker compose up -d postgres redis
npm run start:dev
```

Verify:

```bash
curl -s http://localhost:3000/api/v1/health
```

Swagger UI: [http://localhost:3000/docs](http://localhost:3000/docs)

## Development Workflow

1. **Sync main**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create a branch**
   ```bash
   git checkout -b feat/short-description
   # or fix/...  docs/...  chore/...
   ```
3. **Implement** changes in the smallest sensible scope.
4. **Test locally**
   ```bash
   npm test
   # or focused:
   npx jest path/to/your.spec.ts --maxWorkers=2
   ```
5. **Commit** with a clear message:
   ```bash
   git add -A
   git commit -m "feat(billing): add overdue invoice reminder endpoint"
   ```
6. **Push and open a PR**
   ```bash
   git push -u origin HEAD
   gh pr create
   ```

## Branch Naming

| Prefix | Use |
|--------|-----|
| `feat/` | New feature |
| `fix/` | Bug fix |
| `docs/` | Documentation only |
| `test/` | Tests only |
| `refactor/` | Internal restructuring |
| `chore/` | Tooling, CI, deps |

## Coding Standards

- Prefer NestJS module boundaries (controllers → services → TypeORM entities)
- Keep DTOs validated with `class-validator`
- Protect mutating routes with JWT + roles (`Admin`, `Operator`, etc.)
- Add or update unit tests for service and domain logic changes
- Do not commit `.env`, keys, dumps, or `node_modules`
- Match existing TypeScript style; avoid unrelated refactors in the same PR

## Pull Request Checklist

Before requesting review, confirm:

- [ ] PR description explains **why** and **what**
- [ ] Linked issue number (e.g. `Closes #123`) when applicable
- [ ] Tests added/updated and passing (`npm test` or scoped Jest)
- [ ] No secrets or local-only files included
- [ ] README / docs updated if behavior or setup changed
- [ ] PR template sections completed

## Review & Merge

Maintainers review for correctness, security, and fit with AquaSense domains (meters, leaks, billing, maintenance, mapping, notifications, analytics). Squash or merge commits may be used depending on the change size.

## Reporting Security Issues

Do **not** open a public issue for vulnerabilities that expose customer or operational data. Email **birukaklilu0110@gmail.com** with a private description and reproduction steps.

## Questions

Open a GitHub Discussion or issue with the question label context, or reach out to the maintainer via the repository contact email.

Thanks for helping improve AquaSense.
