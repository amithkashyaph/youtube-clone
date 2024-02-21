import React from "react";
import SearchSuggestionCard from "./SearchSuggestionCard";
import { Link } from "react-router-dom";

const SearchSuggestionList = ({ searchSuggestions }) => {
  console.log(searchSuggestions);
  return (
    <div>
      {searchSuggestions.map((suggestion) => (
        <Link to={`/watch?v=${suggestion.id.videoId}`} key={suggestion.etag}>
          <SearchSuggestionCard data={suggestion} />
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestionList;
