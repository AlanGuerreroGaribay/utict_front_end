import {
  SearchHistoryCleanButton,
  SearchHistoryContainer,
  SearchHistoryList,
  SearchHistoryTitle,
} from "../components/SearchHistory";
import { SearchHistoryProps } from "../utils/types/history.type";

const SearchHistory = ({ history, onClear }: SearchHistoryProps) => {
  return (
    <SearchHistoryContainer>
      <SearchHistoryTitle />
      <SearchHistoryList history={history} />
      <SearchHistoryCleanButton onClear={onClear} />
    </SearchHistoryContainer>
  );
};

export default SearchHistory;
