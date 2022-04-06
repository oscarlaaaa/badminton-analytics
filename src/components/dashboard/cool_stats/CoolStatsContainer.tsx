import * as React from "react";
import { Match, Player } from "../../../types/DataTypes";
import { CoolStats } from "../../../types/OtherTypes";
import CoolStatsComponent from "./CoolStatsComponent";

interface CoolStatsProps {
  player: Player;
  matches: Match[];
}

function processCoolStats(player: Player, matches: Match[]): CoolStats {
  let [longestWinStreak, longestLossStreak] = [0, 0];
  let [currentLongestWinStreak, currentLongestLossStreak] = [0, 0];
  let [totalPointsWon, totalPointsLost, totalMatchesWon, totalMatchesLost, totalMatchDuration] = [0, 0, 0, 0, 0];
  for (let match of matches) {
    totalMatchDuration += match.duration;
    totalPointsWon += match.winnerId === player.id ? match.winnerPoints : match.loserPoints;
    totalPointsLost += match.loserId === player.id ? match.winnerPoints : match.loserPoints;
    if (match.winnerId === player.id) {
      totalMatchesWon++;
    } else {
      totalMatchesLost++;
    }

    if (match.winnerId === player.id) {
      currentLongestWinStreak++;
      currentLongestLossStreak = 0;
    } else {
      currentLongestLossStreak++;
      currentLongestWinStreak = 0;
    }
    
    if (currentLongestLossStreak > longestLossStreak) {
      longestLossStreak = currentLongestLossStreak;
    }
    if (currentLongestWinStreak > longestWinStreak) {
      longestWinStreak = currentLongestWinStreak;
    }
  }

  const coolStats: CoolStats = {
    longestWinStreak: longestWinStreak,
    longestLossStreak: longestLossStreak,
    totalPointsWon: totalPointsWon,
    totalPointsLost: totalPointsLost,
    totalMatchesWon: totalMatchesWon,
    totalMatchesLost: totalMatchesLost,
    totalMatchDuration: totalMatchDuration,
    totalNumOfMatches: matches.length
  }

  return coolStats;
}

const CoolStatsContainer: React.FC<CoolStatsProps> = ({ player, matches }) => {
  const [coolStats, setCoolStats] = React.useState<CoolStats | null>(null);
  React.useEffect(() => {
    setCoolStats(processCoolStats(player, matches));
  }, [])

  return coolStats && <CoolStatsComponent coolStats={coolStats} />;
};

export default CoolStatsContainer;
