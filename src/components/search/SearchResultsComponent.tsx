import * as React from "react";
import { Player } from "../../types/DataTypes";
import SearchResultSuggestion from "./SearchResultSuggestion";

interface ResultProps {
  suggestions: Player[];
}

const displayResults = (suggestions: Player[]) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      {suggestions.map((player: Player) => {
        return (
          <SearchResultSuggestion player={player} />
        );
      })}
    </table>
  );
};

const SearchResultsComponent: React.FC<ResultProps> = ({ suggestions }) => {
  React.useEffect(() => {
  }, [suggestions]);
  return displayResults(suggestions);
};

export default SearchResultsComponent;
