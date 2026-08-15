# Deal Finder

Deal Finder is the main product workspace for the PressCentra ecosystem. It contains the app's frontend, API, admin service, shared types, and ETL pipeline.

## Project purpose

This project is intended to power the main deal discovery and deal-processing experience. It includes both the user-facing product layer and the operational pieces that support it.

## Structure

```text
deal-finder/
├── services/
│   ├── web/          # React frontend
│   ├── api/          # Express API
│   └── admin/        # FastAPI admin service
├── packages/
│   └── shared-types/ # Shared TypeScript contracts
├── workflows/
│   └── etl/          # Data extraction / transformation / load pipeline
├── package.json
├── package-lock.json
├── tsconfig.base.json
└── README.md
```

## Local development

From this folder:

```bash
npm install
npm run dev:web
npm run dev:api
```

Run the admin service:

```bash
cd services/admin
uv sync
uv run admin
```

## Notes

This app lives at the same level as the `docs/` and `resume-tweak/` projects so the repository is organized as a set of related but independent projects.
