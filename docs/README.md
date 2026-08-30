# PressCentra Website

This folder contains the public-facing website and documentation site for the PressCentra project.

## Purpose

The docs site is separate from the main app code and is intended to host:

- product marketing content
- project overview information
- feature documentation
- deployment and release notes

## Stack

- React
- Vite
- GitHub Pages deployment setup

## Local development

From this folder:

```bash
npm install
npm run dev
```

Build the site:

```bash
npm run build
```

## Deployment

This project is configured with a GitHub Pages deployment flow using the `gh-pages` package and the `deploy` script in `package.json`.

## Relationship to the repo

This site sits alongside the main codebase and the standalone `resume-tweak/` app, making it easy to keep product, docs, and tooling projects separate while still sharing the same repository.

## Showcasing repository projects

The docs site includes a Projects page at `/projects`. It highlights the main projects in this repository (for now: **Deal Finder** and **Resume Tweak**) with links to their detail pages and GitHub folders.

- If you add new top-level projects, update `docs/src/Projects.jsx` and add a detail route in `docs/src/App.jsx` as needed.
 