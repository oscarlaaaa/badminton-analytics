import * as React from "react";
import * as MatchUtils from "../../../utils/MatchUtils";
import MatchHistoryComponent from "./MatchHistoryComponent";
import { Player, Match } from "../../../types/DataTypes";
import "../../../styles/MatchHistory.css";

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
    <>
      <h2>Match History</h2>
      <div id="match-history-container">
        <MatchHistoryComponent
          player={player}
          matches={matches}
          playerCache={player_cache}
          tourneyCache={tournament_cache}
        />
      </div>
    </>
  );
};

export default MatchHistoryContainer;
