import * as React from "react";
import { useParams } from "react-router-dom";
import * as SearchUtils from "../../utils/SearchUtils";
import PlayerGeneralInfo from "./PlayerGeneralInfo";
import { Player } from "../../types/DataTypes";
import MatchHistoryContainer from "./matches/MatchHistoryContainer";

const DashboardPage: React.FC = (): React.ReactElement => {
  const { uid } = useParams<string>();
  const [player, setPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    SearchUtils.fetchPlayer(uid)
    .then((result: Player) => {
        setPlayer(result);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>This is the dashboard page. The current player is {uid} </h1>
      {player ? <PlayerGeneralInfo player={player} /> : <p>No player was found.</p>}
      <br />
      <h2>Match History</h2>
      {player ? <MatchHistoryContainer player={player} /> : null}
    </div>
  );
};

export default DashboardPage;
