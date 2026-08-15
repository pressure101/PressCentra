# AGENTS.md for Deal Finder

This file defines the working rules for AI assistants operating in the Deal Finder project.

## Location and scope

This file lives in `deal-finder/.agent/AGENTS.md` and applies specifically to the Deal Finder app, not to the repository as a whole.

The Deal Finder project is the main product workspace in this repo. Any work here should stay within `deal-finder/` unless the user explicitly asks for another project, such as `docs/` or `resume-tweak/`.

## Project purpose

Deal Finder is the core product application. It contains the frontend, API, admin service, shared packages, and ETL workflow used to support the deal discovery experience.

## Working boundaries

- Keep changes inside `deal-finder/` unless the task explicitly requires repo-level or sibling-project work.
- Do not edit unrelated project folders without explicit instruction.
- Keep the scope narrow and focused on the user's request.
- Prefer project-local files and documentation inside `deal-finder/` for Deal Finder tasks.
- Avoid unrelated cleanup or refactors in the same change.

## Project structure

- `services/web/` — React frontend
- `services/api/` — Express API
- `services/admin/` — FastAPI admin service
- `packages/shared-types/` — shared TypeScript types
- `workflows/etl/` — ETL scripts and data processing
- `README.md` — project-level overview for Deal Finder
- `.agent/AGENTS.md` — working rules for this project

## Documentation expectations

- Keep the repo root README high level and repo-oriented.
- Keep Deal Finder-specific setup and implementation notes in `deal-finder/README.md` or the relevant subfolder README.
- Do not add general repo-wide setup steps to the root README when the work is specific to the Deal Finder product.
- Treat `deal-finder/.agent/AGENTS.md` as the place that governs AI behavior for this app, not the entire repo.

## Default behavior

- Make the smallest correct change.
- Follow the existing project conventions and folder structure.
- If the task is unclear, ask for clarification before editing.
- If the work touches multiple projects, explicitly confirm the scope first.
