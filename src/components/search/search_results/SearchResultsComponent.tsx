import * as React from "react";
import { Player } from "../../../types/DataTypes";
import SearchResultSuggestion from "./SearchResultSuggestion";

interface ResultProps {
  suggestions: Player[];
}

const SearchResultsComponent: React.FC<ResultProps> = ({ suggestions }) => {
  return (
    <table style={{"margin":"5% auto 5% auto"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {suggestions.map((player: Player) => {
          return <SearchResultSuggestion player={player} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResultsComponent;
