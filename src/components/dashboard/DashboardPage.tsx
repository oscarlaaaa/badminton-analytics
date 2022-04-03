import * as React from "react";
import { useParams } from "react-router-dom";
import * as PlayerUtils from "../../utils/PlayerUtils";
import PlayerGeneralInfo from "./player_info/PlayerGeneralInfo";
import { Player } from "../../types/DataTypes";
import MatchHistoryContainer from "./matches/MatchHistoryContainer";
import GeneralHeadToHeadComponent from "./h2h_match_history/GeneralHeadToHeadComponent";
import CoolStatsContainer from "./cool_stats/CoolStatsContainer";
import { Grid } from "@mantine/core";

const DashboardPage: React.FC = (): React.ReactElement => {
  const { uid } = useParams<string>();
  const [player, setPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    PlayerUtils.fetchPlayer(uid).then((result: Player) => {
      setPlayer(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return player ? (
    <div>
      <PlayerGeneralInfo player={player} />
      <Grid grow columns={2} style={{maxWidth: "1200px", margin: "auto"}}>
        <CoolStatsContainer player={player.id} />
        <GeneralHeadToHeadComponent player={player.id} />
        <MatchHistoryContainer player={player} />
      </Grid>
    </div>
  ) : (
    <p>Error: ID doesn't correspond with a player. Please try again.</p>
  );
};

export default DashboardPage;
