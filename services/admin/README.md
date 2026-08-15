# Admin Service

This service is the internal admin layer for the PressCentra workspace.

## Purpose

The admin project is intended to host operational tooling, admin endpoints, and internal tasks that sit outside the main user-facing application flow.

## Stack

- Python
- FastAPI

## Local development

From this directory:

```bash
uv sync
uv run admin
```

## Notes

This project is part of the broader PressCentra monorepo and is currently being organized as a reusable service alongside the main web and API work.
