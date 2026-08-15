# PressCentra Repository

This repository contains multiple related projects that are all part of the PressCentra ecosystem, but do not all live in the same app structure yet. The repo currently includes:

- the main PressCentra application work at the repository root
- a public-facing website in `docs/`
- a standalone AI resume optimization app in `resume-tweak/`
- supporting service packages under `services/` and `packages/`

The root application is still in its early staging state and may eventually be moved into its own dedicated folder once the product architecture is finalized.

## Repository layout

```text
.
├── docs/                     # Marketing / documentation website
├── resume-tweak/             # Standalone Streamlit resume tuning tool
├── services/                 # Product and admin service projects
│   ├── web/                  # React frontend app
│   ├── api/                  # Express API
│   └── admin/                # FastAPI admin service
├── packages/
│   └── shared-types/         # Shared TypeScript interfaces
├── package.json              # Root workspace configuration
├── tsconfig.base.json
├── .gitignore
├── README.md
├── AGENTS.md
└── package-lock.json
```

## Project overview

### 1. PressCentra root application
This is the main product workspace. It currently contains the web frontend, API backend, and shared app infrastructure in a single repo-level structure.

Tech stack:
- React + Vite frontend
- Express + TypeScript API
- FastAPI admin service
- shared TypeScript types package

Quick start:

```bash
npm install
npm run dev:web
npm run dev:api
```

To run the admin service:

```bash
cd services/admin
uv sync
uv run admin
```

### 2. Docs website
The `docs/` folder is a separate website project used for public-facing content, project documentation, and marketing material. It is configured as its own Vite application and can be deployed as a static site.

Quick start:

```bash
cd docs
npm install
npm run dev
```

Build for deployment:

```bash
cd docs
npm run build
```

### 3. Resume Tweak
The `resume-tweak/` project is a standalone app designed to help tailor a résumé to a target job description using a local Ollama-backed AI workflow.

It is intentionally separate from the main product because it is a focused personal or career-tool utility rather than a core app service.

Quick start:

```bash
cd resume-tweak
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
streamlit run main.py
```

Notes:
- The app expects Ollama to be running locally.
- Use a model such as `llama3.1` in the local Ollama runtime.
- This project is designed to keep resume feedback private and local to the machine.

### 4. Service modules
The application services live under `services/` and are organized by responsibility:

- `services/web/` — frontend application shell
- `services/api/` — backend API entrypoints
- `services/admin/` — admin service / internal tooling
- `packages/shared-types/` — shared contracts used across services

## Recommended repo structure going forward
The repo is currently a hybrid of a top-level app and separate projects. As the codebase grows, a cleaner long-term layout may be:

```text
apps/
  presscentra/
  docs/
  resume-tweak/
```

This would make each project explicit and easier to maintain independently while keeping shared packages and infrastructure in a common root.

## Contributing
Use the project-specific instructions for each area:
- root app: work from the repository root
- docs site: work in `docs/`
- resume tool: work in `resume-tweak/`

Keep the repo documentation aligned with the current project boundaries as new folders are introduced or moved.
