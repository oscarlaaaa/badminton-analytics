import * as React from "react";
import { Player } from "../../types/DataTypes";

interface PlayerSuggestionProps {
  player: Player;
}

const PlayerGeneralInfo: React.FC<PlayerSuggestionProps> = ({ player }) => {
  return (
      <ul>
        <li><b>ID:</b> {player.id ?? "None"}</li>
        <li><b>Name: </b>{player.name ?? "None"}</li>
        <li><b>Country: </b>{player.country ?? "None"}</li>
        <li><b>Event: </b>{player.event ?? "None"}</li>
        <li><b>BirthDate: </b>{player.birthDate ?? "None"}</li>
        <li><b>Playing Hand: </b>{player.playHand ?? "None"}</li>
        <li><b>Height: </b>{player.height + "cm" ?? "None"} </li>
      </ul>
  );
};

export default PlayerGeneralInfo;
