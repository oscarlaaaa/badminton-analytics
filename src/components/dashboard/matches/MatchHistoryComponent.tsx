import * as React from "react";
import { Player, Match } from "../../../types/DataTypes";
import SingleMatchContainer from "./SingleMatchContainer";

interface MatchHistoryProps {
  player: Player;
  matches: Match[];
}

const MatchHistoryComponent: React.FC<MatchHistoryProps> = ({ player, matches }) => {
  return matches ? (
    <table>
      <tr>
        <th>Winner</th>
        <th>Score</th>
        <th>Loser</th>
        <th>Tournament</th>
        <th>Duration</th>
      </tr>
      {matches.map((match: Match) => {
        return <SingleMatchContainer player={player} match={match} />;
      })}
    </table>
  ) : (
    <p>No matches found.</p>
  );
};

export default MatchHistoryComponent;
