import * as React from "react";
import { CoolStats } from "../../../types/OtherTypes";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface TotalStatsProps {
  coolStats: CoolStats;
}

function buildData(coolStats: CoolStats) {
  return {
    points: [
      { name: "Points won", value: coolStats.totalPointsWon },
      { name: "Points lost", value: coolStats.totalPointsLost },
    ],
    matches: [
      { name: "Matches won", value: coolStats.totalMatchesWon },
      { name: "Matches lost", value: coolStats.totalMatchesLost },
    ],
  };
}

const TotalStatsComponent: React.FC<TotalStatsProps> = ({ coolStats }) => {
  const data = buildData(coolStats);
  const COLORS1 = ["#74e3fc", "#fc8d74"]
  const COLORS2 = ["#3668ff", "#de2339"]

  return (
    <>
      <h3 className="section-header">Total Gameplay Statistics</h3>
      <ResponsiveContainer width="100%" height={225}>
        <PieChart>
          <Pie
            data={data['points']}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          >{
          	data['points'].map((entry, index) => <Cell fill={COLORS1[index % COLORS1.length]}/>)
          }</Pie>
          <Pie
            data={data['matches']}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          >{
          	data['matches'].map((entry, index) => <Cell fill={COLORS2[index % COLORS2.length]}/>)
          }</Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default TotalStatsComponent;
