import * as React from "react";
import { Player } from "../../../types/DataTypes";

interface SingleMatchProps {
  player: Player;
  winnerName: string;
  loserName: string;
  points: string[];
  tournamentName: string;
  duration: number;
}

const matchPointField = (points: string[]) => {
  return <td>
    {points.map((point) => {
      return <p style={{"margin":"0"}}>{point}</p>
  })}</td>;
};

const SingleMatchComponent: React.FC<SingleMatchProps> = (props) => {
  return <tr>
    <td>{props.winnerName === props.player.name ? (<b>{props.winnerName}</b>) : props.winnerName}</td>
    {matchPointField(props.points)}
    <td>{props.loserName === props.player.name ? (<b>{props.loserName}</b>) : props.loserName}</td>
    <td>{props.tournamentName}</td>
    <td>{props.duration}</td>
  </tr>;
};

export default SingleMatchComponent;
