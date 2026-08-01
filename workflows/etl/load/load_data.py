import pandas as pd


def load_data(df: pd.DataFrame, path: str) -> None:
    df.to_csv(path, index=False)
