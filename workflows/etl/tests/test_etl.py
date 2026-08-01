import os
import pandas as pd
from ingest.fetch_data import fetch_data
from transform.transform_data import transform_data
from load.load_data import load_data


def test_fetch_data(monkeypatch):
    class DummyResponse:
        def raise_for_status(self):
            pass

        def json(self):
            return [{"id": 1, "name": "test"}]

    def dummy_get(_url):
        return DummyResponse()

    monkeypatch.setattr('requests.get', dummy_get)
    data = fetch_data('http://example.com')
    assert data == [{"id": 1, "name": "test"}]


def test_transform_data():
    raw = [{"id": 1, "name": "test"}, {"id": None, "name": None}]
    df = transform_data(raw)
    assert len(df) == 1
    assert df.iloc[0]['name'] == 'test'


def test_load_data(tmp_path):
    df = pd.DataFrame([{"id": 1, "name": "test"}])
    path = tmp_path / 'data.csv'
    load_data(df, str(path))
    assert path.exists()
    assert 'test' in path.read_text()
