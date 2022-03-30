import * as React from "react";
import { useParams } from "react-router-dom";
import * as SearchUtils from "../../utils/SearchUtils";
import PlayerGeneralInfo from "./player_info/PlayerGeneralInfo";
import { Player } from "../../types/DataTypes";
import MatchHistoryContainer from "./matches/MatchHistoryContainer";
import HeadToHeadHistory from "./h2h_match_history/HeadToHeadHistoryContainer";

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
      <PlayerGeneralInfo player={player} />
      <MatchHistoryContainer player={player} />
      <HeadToHeadHistory player={player.id} wins={true} />
      <HeadToHeadHistory player={player.id} wins={false} />
    </div>
  ) : (
    <p>Error: ID doesn't correspond with a player. Please try again.</p>
  );
};

export default DashboardPage;
