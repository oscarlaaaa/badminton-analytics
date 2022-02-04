import * as React from "react";
import { useParams } from "react-router-dom";

const DashboardPage: React.FC = (): React.ReactElement => {
  let { playerId } = useParams();
  return (
    <div>
      <h1>This is the dashboard page. The current player is {playerId} </h1>
    </div>
  );
};

export default DashboardPage;
