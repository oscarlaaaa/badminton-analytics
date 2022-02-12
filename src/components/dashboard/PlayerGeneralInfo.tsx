import * as React from "react";
import { Player } from "../../types/DataTypes";

interface PlayerSuggestionProps {
  props: Player;
}

const PlayerGeneralInfo: React.FC<PlayerSuggestionProps> = ({ props }) => {
  return (
      <ul>
        <li><b>ID:</b> {props.id ?? "None"}</li>
        <li><b>Name: </b>{props.name ?? "None"}</li>
        <li><b>Country: </b>{props.country ?? "None"}</li>
        <li><b>Event: </b>{props.event ?? "None"}</li>
        <li><b>BirthDate: </b>{props.birthDate ?? "None"}</li>
        <li><b>Playing Hand: </b>{props.playHand ?? "None"}</li>
        <li><b>Height: </b>{props.height ?? "None"} cm</li>
      </ul>
  );
};

export default PlayerGeneralInfo;
