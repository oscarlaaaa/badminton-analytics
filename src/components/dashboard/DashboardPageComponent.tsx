import * as React from "react";
import PlayerGeneralInfo from "./player_info/PlayerGeneralInfo";
import { Player, Match } from "../../types/DataTypes";
import MatchHistoryContainer from "./matches/MatchHistoryContainer";
import GeneralHeadToHeadComponent from "./h2h_match_history/GeneralHeadToHeadComponent";
import CoolStatsContainer from "./cool_stats/CoolStatsContainer";
import { Grid } from "@mantine/core";

interface DashboardPageProps {
  player: Player;
  matches: Match[];
  setVisible: () => void;
}

const DashboardPageComponent: React.FC<DashboardPageProps> = ({ player, matches, setVisible }): React.ReactElement => {
  React.useEffect(() => {
    setTimeout(() => setVisible(), 1500);
  }, [])

  return (
    <div>
      <Grid grow columns={2} style={{maxWidth: "1200px",  margin: "auto"}}>
        <PlayerGeneralInfo player={player} />
        <CoolStatsContainer player={player} matches={matches} />
        <GeneralHeadToHeadComponent player={player.id} />
        <MatchHistoryContainer player={player} matches={matches.slice(-5)} />
      </Grid>
    </div>
  )
};

export default DashboardPageComponent;
