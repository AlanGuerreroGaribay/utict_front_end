import { useState } from "react";
import { HistoryProps } from "../../utils/types/history.type";
import { LayoutContainer } from "../../components/Layout/LayoutContainer";
import SearchForm from "../../views/SearchForm";
import SearchHistory from "../../views/SearchHistory";

function App() {
  const [searchHistory, setSearchHistory] = useState<HistoryProps[]>(
    JSON.parse(localStorage.getItem("places-data") || "[]")
  );

  const addSearchHistory = (newEntry: HistoryProps) => {
    setSearchHistory((prevHistory) => {
      const updatedHistory = [newEntry, ...prevHistory].slice(0, 5);
      localStorage.setItem("places-data", JSON.stringify(updatedHistory));

      return updatedHistory;
    });
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.setItem("places-data", JSON.stringify([]));
  };

  return (
    <LayoutContainer>
      <SearchForm onSearch={addSearchHistory} />
      <SearchHistory history={searchHistory} onClear={clearHistory} />
    </LayoutContainer>
  );
}

export default App;
