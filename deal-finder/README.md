# Deal Finder

Deal Finder is the main product application in this repository. It contains the product UI, API layer, admin tooling, shared contracts, and the ETL pipeline that powers deal data processing.

## Purpose

This project is the core business application for the PressCentra ecosystem. It brings together the frontend experience, backend services, and operational tooling needed to discover and process deal data.

## Stack

- React + Vite
- TypeScript
- Express API
- FastAPI admin service
- shared TypeScript packages
- ETL workflow tooling

## Structure

```text
deal-finder/
├── .agent/
│   └── AGENTS.md     # AI guidance for the Deal Finder project
├── services/
│   ├── web/          # Frontend application
│   ├── api/          # Backend API
│   └── admin/        # Admin service
├── packages/
│   └── shared-types/ # Shared contracts
├── workflows/
│   └── etl/          # Extraction / transform / load flow
├── package.json
├── package-lock.json
├── tsconfig.base.json
├── README.md
└── .gitignore
```

## Local development

From this directory:

```bash
npm install
npm run dev:web
npm run dev:api
```

Admin service:

```bash
cd services/admin
uv sync
uv run admin
```

## Relationship to the repo

Deal Finder sits alongside the `docs/` website and the `resume-tweak/` tool as a sibling project in the same repository. Each project is independent, but they are tracked together under one repo for convenience.
