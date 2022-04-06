 import * as React from "react";
import { Player, Match } from "../../../types/DataTypes";
import SingleMatchContainer from "./SingleMatchContainer";
import { Table } from "@mantine/core";
import { Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface MatchHistoryProps {
  player: Player;
  matches: Match[];
}

const MatchHistoryComponent: React.FC<MatchHistoryProps> = ({
  player,
  matches,
}) => {
  const largeScreen = useMediaQuery("(min-width: 400px)");
  return (
    <Container fluid style={{width: "100%", margin: "5px auto", overflowX: largeScreen ? "initial" : "scroll"}}>
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
              <th style={{textAlign: "center"}}>{largeScreen ? "Tournament" : "Tourn."}</th>
              <th style={{textAlign: "center"}}>Time</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match: Match) => {
              return (
                <SingleMatchContainer
                  player={player}
                  match={match}
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
