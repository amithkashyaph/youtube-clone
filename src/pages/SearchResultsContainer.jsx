import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchVideosBySearchQueryParamUrl } from "../utils/constants";
import SearchSuggestionList from "../components/SearchSuggestionList";

const SearchResultsContainer = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;
    fetchVideosBySearchQuery();
  }, [searchQuery]);

  const fetchVideosBySearchQuery = async () => {
    const q = searchQuery?.split(" ").join("+");
    const url = fetchVideosBySearchQueryParamUrl(q);

    const data = await fetch(url);

    const jsonData = await data.json();

    setSearchResults(jsonData.items);
  };

  return (
    <div>
      <SearchSuggestionList searchSuggestions={searchResults} />
    </div>
  );
};

export default SearchResultsContainer;
