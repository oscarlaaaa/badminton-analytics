import * as React from "react";
import { CoolStats } from "../../../types/OtherTypes";

interface OtherStatsProps {
  coolStats: CoolStats;
}

const OtherStatsComponent: React.FC<OtherStatsProps> = ({ coolStats }) => {
  return (
    <div>
      <h3>Other Cool Statistics</h3>
      <p>
        <b>Total Matches Played:</b> {coolStats.totalNumOfMatches} matches
      </p>
      <p>
        <b>Total Match Duration:</b> {coolStats.totalMatchDuration} minutes 
      </p>

      <p>
        <b>Win Percentage:</b>{" "}
        {((coolStats.totalMatchesWon / coolStats.totalNumOfMatches) * 100).toFixed(2)}%
      </p>
      <p>
        <b>Average Game Length:</b>{" "}
        {(coolStats.totalMatchDuration / coolStats.totalNumOfMatches).toFixed(2)} minutes long
      </p>
    </div>
  );
};

export default OtherStatsComponent;
