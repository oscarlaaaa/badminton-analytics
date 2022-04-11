import * as React from "react";
import { CoolStats } from "../../../types/OtherTypes";

interface StreakStatsProps {
  coolStats: CoolStats;
}

const StreakStatsComponent: React.FC<StreakStatsProps> = ({ coolStats }) => {
  return (
    <>
    <h3>Longest Streaks</h3>
      <div>
        <p>
          <b>Longest Win Streak: </b>
          {coolStats.longestWinStreak}
        </p>
      </div>
      <div>
        <p>
          <b>Longest Loss Streak: </b>
          {coolStats.longestLossStreak}
        </p>
      </div>
    </>
  );
};

export default StreakStatsComponent;
