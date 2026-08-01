from ingest.fetch_data import fetch_data
from transform.transform_data import transform_data
from load.load_data import load_data


def main() -> None:
    source_url = 'https://jsonplaceholder.typicode.com/posts'
    raw_data = fetch_data(source_url)
    df = transform_data(raw_data)
    load_data(df, 'etl/output/data.csv')


if __name__ == '__main__':
    main()
