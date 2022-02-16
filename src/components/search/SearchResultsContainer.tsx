import * as React from "react";
import SearchResultsComponent from "./SearchResultsComponent";
import { Player } from "../../types/DataTypes";

interface ResultProps {
  suggestions: Player[];
}

const SearchResultsContainer: React.FC<ResultProps> = ({ suggestions }) => {
  return (
    <div>
      {suggestions ? (
        <SearchResultsComponent suggestions={suggestions} />
      ) : (
        <h1>No results found.</h1>
      )}
    </div>
  );
};

export default SearchResultsContainer;
