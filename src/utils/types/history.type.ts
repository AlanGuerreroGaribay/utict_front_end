export type HistoryProps = {
  zip: string;
  places: {
    "place name": string;
    longitude: string;
    state: string;
    "state abbreviation": string;
    latitude: string;
  }[];
  state: string;
};

export type SearchHistoryProps = {
  history: HistoryProps[];
  onClear: () => void;
};
