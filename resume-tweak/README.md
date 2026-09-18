# Resume Tweak

Resume Tweak is a standalone local tool for improving a résumé against a target job description. It uses Streamlit for the interface and connects to a local Ollama model to provide tailored suggestions and missing-skill analysis.

## Purpose

This project helps users:

- paste in an existing résumé
- paste in a job description
- receive suggestions to align the résumé with the opportunity
- identify missing skills and wording improvements

## Stack

- Python
- Streamlit
- Ollama

## Local setup

### Initiate Project
```bash
cd resume-tweak
uv init
uv add -r requirements.txt
```

### Tweak and/or Create Local Model
There is a base Modelfile that can be used to customize your model. You can change the parameters to match your style or use the base file.

```bash
ollama create resume-tweak-bot -f src/Modelfile
ollama run resume-tweak-bot
```

### Running the UI
```bash
uv run streamlit run src/main.py
```

## Requirements

The app expects Ollama to be running locally and a compatible model to be available, such as `llama3.1`.

## Notes

This app is intentionally separate from the main PressCentra application and should be treated as a standalone career productivity utility rather than a core service of the product codebase.

