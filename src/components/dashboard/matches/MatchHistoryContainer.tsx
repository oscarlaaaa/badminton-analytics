import * as React from "react";
import * as MatchUtils from "../../../utils/MatchUtils";
import MatchHistoryComponent from './MatchHistoryComponent';
import { Player, Match } from "../../../types/DataTypes";


interface MatchHistoryProps {
  player: Player;
}

const MatchHistoryContainer: React.FC<MatchHistoryProps> = ({ player }) => {
  const [matches, setMatches] = React.useState<Match[] | null>(null);
  
  React.useEffect(() => {
    MatchUtils.fetchMatches(player.id)
    .then((results: Match[]) => {
      setMatches(results);
    })
  }, []);

  return <MatchHistoryComponent player={player} matches={matches} />;
};

export default MatchHistoryContainer;
