import * as React from "react";
import { Player } from "../../types/DataTypes";

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
        <th>Name</th>
        <th>Country</th>
        <th>ID</th>
        <th>Birth date</th>
        <th>Playing hand</th>
        <th>Event</th>
        <th>Height</th>
      </tr>
      {suggestions.map((player: Player) => {
        return (
          <tr>
            <td>{player.name ?? "None"}</td>
            <td>{player.country ?? "None"}</td>
            <td>{player.id ?? "None"}</td>
            <td>{player.birthDate ?? "None"}</td>
            <td>{player.playHand ?? "None"}</td>
            <td>{player.event ?? "None"}</td>
            <td>{player.height ?? "None"}</td>
          </tr>
        );
      })}
    </table>
  );
};

const SearchResultsComponent: React.FC<ResultProps> = ({ props }) => {
  React.useEffect(() => {
    console.log(props.suggestions);
  }, [props.suggestions]);
  return displayResults(props.suggestions);
};

export default SearchResultsComponent;
