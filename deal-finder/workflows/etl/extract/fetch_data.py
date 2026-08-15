import requests


def fetch_data(source_url: str) -> dict:
    response = requests.get(source_url)
    response.raise_for_status()
    return response.json()
