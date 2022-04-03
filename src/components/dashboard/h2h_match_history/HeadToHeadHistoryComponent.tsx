import * as React from "react";
import { HeadToHeadRecord } from "../../../types/DataTypes";
import { Container } from "@mantine/core";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Label,
  ResponsiveContainer,
} from "recharts";

interface HeadToHeadRecordAdjusted extends HeadToHeadRecord {
  name: string;
  img_link: string;
}

interface HeadToHeadHistoryComponentProps {
  history: HeadToHeadRecordAdjusted[];
  wins: boolean;
}

// Code from: https://codesandbox.io/s/line-chart-with-customized-label-hs5b7?file=/src/App.tsx
const CustomizedAxisTick: React.FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-37)"
        fontSize={"10pt"}
        style={{ wordWrap: "break-word" }}
      >
        {payload.value}
      </text>
    </g>
  );
};

const HeadToHeadHistoryComponent: React.FC<HeadToHeadHistoryComponentProps> = ({
  history,
  wins,
}) => {
  return (
    <>
      <h3 className="section-header">
        {wins ? "Best" : "Worst"} Player Match Ups
      </h3>
      <ResponsiveContainer width="100%" height={225}>
        <BarChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            height={100}
            tick={<CustomizedAxisTick />}
          />
          <YAxis>
            <Label value="Games" offset={0} angle={-90} position="center" />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="wins" name="Wins" fill="#74e3fc" />
          <Bar dataKey="losses" name="Losses" fill="#fc8d74" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default HeadToHeadHistoryComponent;
