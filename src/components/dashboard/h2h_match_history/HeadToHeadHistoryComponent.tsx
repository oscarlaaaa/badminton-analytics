import * as React from "react";
import { HeadToHeadRecord } from "../../../types/DataTypes";
import { Table } from "@mantine/core";

interface HeadToHeadHistoryComponentProps {
  history: HeadToHeadRecord[];
  wins: boolean;
}

const HeadToHeadHistoryComponent: React.FC<HeadToHeadHistoryComponentProps> = ({
  history,
  wins,
}) => {
  return (
    <>
      <h3 style={{ margin: "20px 0 0 4%" }}>{wins ? "Best" : "Worst"} Player Match Ups</h3>
      <Table>
        <thead>
          <tr>
            <th>Opponent</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record: HeadToHeadRecord) => {
            return (
              <tr>
                <td>{record.opponent}</td>
                <td>{record.wins}</td>
                <td>{record.losses}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default HeadToHeadHistoryComponent;
