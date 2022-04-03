import * as React from "react";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { Container } from "@mantine/core";
import { Label } from "recharts";

interface SummedHeadToHeadRecord {
  wins: number;
  losses: number;
  count: number;
}

interface H2HHistoryComponentProps {
  h2h: SummedHeadToHeadRecord[];
}

const AllHeadToHeadComponent: React.FC<H2HHistoryComponentProps> = ({
  h2h,
}) => {
  return (
    <>
      <h3 className="section-header">Head-to-Head Match Up Distribution</h3>

      <ResponsiveContainer width="100%" height={225}>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="wins" name="Wins" type="number">
            <Label value="Wins" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis dataKey="losses" name="Losses">
            <Label value="Losses" offset={0} angle={-90} position="center" />
          </YAxis>
          <ZAxis dataKey="count" name="No. of Players" range={[50, 550]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="xd" data={h2h} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};

export default AllHeadToHeadComponent;
