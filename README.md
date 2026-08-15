# PressCentra Repository

This repository contains a small set of related projects that live alongside each other as sibling workspaces:

- `deal-finder/` — the main Deal Finder application and product code
- `docs/` — the public-facing docs and marketing website
- `resume-tweak/` — the standalone resume optimization tool

## Repository layout

```text
.
├── deal-finder/          # Main product app
├── docs/                 # Website / documentation site
├── resume-tweak/         # Resume tuning tool
├── .gitignore
├── AGENTS.md
├── README.md
└── .github/
```

## Project stack

### Deal Finder
- React + Vite frontend
- Express + TypeScript API
- FastAPI admin service
- shared TypeScript packages
- ETL workflow tooling

### Docs
- React + Vite
- GitHub Pages deployment setup

### Resume Tweak
- Python
- Streamlit
- Ollama

## Project separation
The repo is organized as sibling projects so each area stays independent while sharing the same repository container.

- `deal-finder/` contains the product application and its internal services
- `docs/` hosts the public site and supporting documentation
- `resume-tweak/` is an isolated tool for resume optimization
