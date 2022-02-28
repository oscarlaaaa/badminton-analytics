import * as React from "react";
import SearchResultsComponent from "./SearchResultsComponent";
import { Player } from "../../../types/DataTypes";
import { Paper } from '@mantine/core';

interface ResultProps {
  suggestions: Player[];
  noSuggestions: string;
}

const SearchResultsContainer: React.FC<ResultProps> = ({
  suggestions,
  noSuggestions,
}) => {
  return (
    <Paper 
    padding="sm"
    style={{ height: "auto" }}>
      {suggestions && <SearchResultsComponent suggestions={suggestions} />}
      {!suggestions && noSuggestions && (
        <p>
          No players with '{noSuggestions}' in their name could be found. Please
          check your spelling and try again.
        </p>
      )}
    </Paper>
  );
};

export default SearchResultsContainer;
