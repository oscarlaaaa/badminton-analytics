import * as React from "react";
import { Player } from "../../types/DataTypes";
import { Link } from "react-router-dom";

interface SearchResultSuggestionProps {
  player: Player;
}

const SearchResultSuggestion: React.FC<SearchResultSuggestionProps> = ({ player }) => {
    const playerLink = "/dashboard/" + player.id;

  return (
      <tr>
        <Link to={playerLink}><td>{player.id ?? "None"}</td></Link>
        <td>{player.name ?? "None"}</td>
      </tr>
    
  );
};

export default SearchResultSuggestion;
