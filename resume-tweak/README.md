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

```bash
cd resume-tweak
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
streamlit run main.py
```

## Requirements

The app expects Ollama to be running locally and a compatible model to be available, such as `llama3.1`.

## Notes

This app is intentionally separate from the main PressCentra application and should be treated as a standalone career productivity utility rather than a core service of the product codebase.

