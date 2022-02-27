import * as React from "react";
import SearchResultsComponent from "./SearchResultsComponent";
import { Player } from "../../../types/DataTypes";

interface ResultProps {
  suggestions: Player[];
  noSuggestions: string;
}

const SearchResultsContainer: React.FC<ResultProps> = ({
  suggestions,
  noSuggestions,
}) => {
  return (
    <div style={{ margin: "auto" }}>
      {suggestions && <SearchResultsComponent suggestions={suggestions} />}
      {!suggestions && noSuggestions && (
        <p>
          No players with '{noSuggestions}' in their name could be found. Please
          check your spelling and try again.
        </p>
      )}
    </div>
  );
};

export default SearchResultsContainer;
