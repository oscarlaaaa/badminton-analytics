import * as React from "react";
import * as MatchUtils from "../../../utils/MatchUtils";
import MatchHistoryComponent from "./MatchHistoryComponent";
import { Player, Match } from "../../../types/DataTypes";
import "../../../styles/MatchHistory.css";

interface MatchHistoryProps {
  player: Player;
  matches: Match[];
}

const MatchHistoryContainer: React.FC<MatchHistoryProps> = ({ player, matches }) => {

  return (
    matches && (
      <MatchHistoryComponent
        player={player}
        matches={matches}
      />
    )
  );
};

export default MatchHistoryContainer;
