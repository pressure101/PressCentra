import pandas as pd


def transform_data(raw_data: list[dict]) -> pd.DataFrame:
    df = pd.DataFrame(raw_data)
    return df.dropna()
