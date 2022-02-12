import * as React from "react";
import { Player } from "../../types/DataTypes";
import PlayerSuggestion from "./PlayerSuggestion";

type ResultType = {
  suggestions: string[];
};

interface ResultProps {
  props: ResultType;
}

const displayResults = (suggestions: any[]) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      {suggestions.map((player: Player) => {
        return (
          <PlayerSuggestion props={player} />
        );
      })}
    </table>
  );
};

const SearchResultsComponent: React.FC<ResultProps> = ({ props }) => {
  React.useEffect(() => {
  }, [props.suggestions]);
  return displayResults(props.suggestions);
};

export default SearchResultsComponent;
