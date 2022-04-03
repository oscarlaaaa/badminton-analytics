import * as React from "react";
import { Player, Match } from "../../../types/DataTypes";
import SingleMatchContainer from "./SingleMatchContainer";
import { Table } from "@mantine/core";
import { Container } from "@mantine/core";

interface MatchHistoryProps {
  player: Player;
  matches: Match[];
  playerCache: object;
  tourneyCache: object;
}

const MatchHistoryComponent: React.FC<MatchHistoryProps> = ({
  player,
  matches,
  playerCache,
  tourneyCache,
}) => {
  return (
    <Container fluid style={{width: "100%", margin: "10px"}}>
      <h3 className="section-header">Recent Matches</h3>
      <div id="match-history-container">
        <Table id="match-history-table">
          <thead>
            <tr>
              <th style={{textAlign: "right"}}>Winner</th>
              <th style={{ width: "fit-content", textAlign: "center" }}>
                Score
              </th>
              <th>Loser</th>
              <th style={{textAlign: "center"}}>Tournament</th>
              <th style={{textAlign: "center"}}>Time</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match: Match) => {
              return (
                <SingleMatchContainer
                  player={player}
                  match={match}
                  playerCache={playerCache}
                  tourneyCache={tourneyCache}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MatchHistoryComponent;
