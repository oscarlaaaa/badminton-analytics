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
} from "recharts";

interface HeadToHeadRecordAdjusted extends HeadToHeadRecord {
  name: string,
  img_link: string
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
        transform="rotate(-25)"
        fontSize={"10pt"}
        style={{wordWrap: "break-word"}}
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
    <Container>
      <h3 className="section-header">
        {wins ? "Best" : "Worst"} Player Match Ups
      </h3>
        <BarChart width={400} height={350} data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" minTickGap={-5} interval={0} height={100} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wins" fill="#74e3fc" />
          <Bar dataKey="losses" fill="#fc8d74" />
        </BarChart>
    </Container>
  );
};

export default HeadToHeadHistoryComponent;
