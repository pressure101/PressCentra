# PressCentra Repository

This is the location of various projects I'm using to get more familiar with various technologies.

- `deal-finder/` — the main Deal Finder application and product code
- `docs/` — the project's website
- `resume-tweak/` — the standalone resume optimization tool
- `rag-pipeline` - parameterized RAG pipeline to search through targeted directories 

## Repository layout

```text
.
├── deal-finder/          # Main product app
├── docs/                 # Website / documentation site
├── resume-tweak/         # Resume tuning tool
├── rag-pipeline/         # Parameterized RAG Pipeline 
├── .gitignore
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

### Projects Website
- React + Vite
- GitHub Pages deployment setup

### Resume Tweak
- Python
- Streamlit
- Ollama

### Parameterized RAG Pipeline
- Python
- Cohere
- LanceDB
- Docling
