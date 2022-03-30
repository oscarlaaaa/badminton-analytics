import * as React from "react";
import { Player, Match } from "../../../types/DataTypes";
import SingleMatchContainer from "./SingleMatchContainer";
import { Table } from "@mantine/core";

interface MatchHistoryProps {
  player: Player;
  matches: Match[];
  playerCache: object;
  tourneyCache: object;
}

const MatchHistoryComponent: React.FC<MatchHistoryProps> = ({ player, matches, playerCache, tourneyCache }) => {
  return matches ? (
    <Table id="match-history-table">
      <thead>
      <tr>
        <th>Winner</th>
        <th style={{"width":"fit-content", "textAlign": "center"}}>Score</th>
        <th>Loser</th>
        <th>Tournament</th>
        <th>Duration</th>
      </tr></thead>
      <tbody>
      {matches.map((match: Match) => {
        return <SingleMatchContainer player={player} match={match} playerCache={playerCache} tourneyCache={tourneyCache} />;
      })}</tbody>
    </Table>
  ) : (
    <p>No matches found.</p>
  );
};

export default MatchHistoryComponent;
