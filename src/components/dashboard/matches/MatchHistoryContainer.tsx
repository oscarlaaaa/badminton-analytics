import * as React from "react";
import * as MatchUtils from "../../../utils/MatchUtils";
import MatchHistoryComponent from "./MatchHistoryComponent";
import { Player, Match } from "../../../types/DataTypes";
import "../../../styles/MatchHistory.css";
import { Container } from "@mantine/core";

interface MatchHistoryProps {
  player: Player;
}

const MatchHistoryContainer: React.FC<MatchHistoryProps> = ({ player }) => {
  const [matches, setMatches] = React.useState<Match[] | null>(null);
  let player_cache = {};
  let tournament_cache = {};

  React.useEffect(() => {
    MatchUtils.fetchMatches(player.id).then((results: Match[]) => {
      setMatches(results);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });
  }, []);

  return (
    <Container>
      <h3 className="section-header">Recent Matches</h3>
      <div id="match-history-container">
        <MatchHistoryComponent
          player={player}
          matches={matches}
          playerCache={player_cache}
          tourneyCache={tournament_cache}
        />
      </div>
    </Container>
  );
};

export default MatchHistoryContainer;
