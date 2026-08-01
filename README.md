# PressCentra

PressCentra is a monorepo that contains a React frontend, a TypeScript backend, and a Python ETL workflow.

## Repository structure

- `services/`
  - `web/` — React frontend app
  - `api/` — TypeScript backend API
- `packages/`
  - `shared-types/` — shared TypeScript interfaces and types
- `workflows/etl/`
  - `extract/` — data extraction logic
  - `transform/` — data normalization and cleaning
  - `load/` — data persistence/loading logic
  - `tests/` — ETL unit tests
- `package.json` — root npm workspace configuration
- `tsconfig.base.json` — shared TypeScript compiler settings
- `.gitignore`

## What is included

- React-based frontend written in TypeScript
- TypeScript backend API powered by Express
- Python ETL pipeline to fetch, transform, and save dataset output
- Shared TypeScript types between frontend and backend

## Local development

Install dependencies from the repo root:

```bash
npm install
```

Run the frontend app:

```bash
npm run dev:web
```

Run the backend API:

```bash
npm run dev:api
```

Run the ETL workflow:

```bash
python etl/run_etl.py
```

## ETL dependencies

Install Python dependencies with:

```bash
python -m pip install -r etl/requirements.txt
```

## Notes

- The frontend uses Vite and React
- The backend uses Express and TypeScript
- The ETL workflow uses `requests` and `pandas`
- `packages/shared-types` is configured for shared TypeScript declarations
