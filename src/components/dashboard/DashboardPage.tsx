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
    SearchUtils.fetchPlayer(uid).then((result: Player) => {
      setPlayer(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return player ? (
    <div>
      <h1>{player.name}</h1>
      <PlayerGeneralInfo player={player} />
      <br />
      <h2>Match History</h2>
      <MatchHistoryContainer player={player} />
    </div>
  ) : (
    <p>Error: ID doesn't correspond with a player. Please try again.</p>
  );
};

export default DashboardPage;
