import * as React from "react";
import { Player } from "../../types/DataTypes";
import { Link } from "react-router-dom";

interface PlayerSuggestionProps {
  props: Player;
}

const PlayerSuggestion: React.FC<PlayerSuggestionProps> = ({ props }) => {
    const playerLink = "/dashboard/" + props.id;

  return (
      <tr>
        <Link to={playerLink}><td>{props.id ?? "None"}</td></Link>
        <td>{props.name ?? "None"}</td>
      </tr>
    
  );
};

export default PlayerSuggestion;
