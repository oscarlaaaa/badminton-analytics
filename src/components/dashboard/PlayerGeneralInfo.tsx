import * as React from "react";
import { Player } from "../../types/DataTypes";

interface PlayerSuggestionProps {
  player: Player;
}

const PlayerGeneralInfo: React.FC<PlayerSuggestionProps> = ({ player }) => {
  return (
      <ul>
        <li><b>ID:</b> {player.id ?? "N/A"}</li>
        <li><b>Name: </b>{player.name ?? "N/A"}</li>
        <li><b>Country: </b>{player.country ?? "N/A"}</li>
        <li><b>Event: </b>{player.event ?? "N/A"}</li>
        <li><b>BirthDate: </b>{player.birthDate ?? "N/A"}</li>
        <li><b>Playing Hand: </b>{player.playHand ?? "N/A"}</li>
        <li><b>Height: </b>{player.height ? player.height + "cm" : "N/A"} </li>
      </ul>
  );
};

export default PlayerGeneralInfo;
