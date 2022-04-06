import * as React from "react";
import { useParams } from "react-router-dom";
import * as PlayerUtils from "../../utils/PlayerUtils";
import * as MatchUtils from "../../utils/MatchUtils";
import { Player, Match } from "../../types/DataTypes";
import DashboardPageComponent from "./DashboardPageComponent";
import { LoadingOverlay } from "@mantine/core";

const DashboardPageContainer: React.FC = (): React.ReactElement => {
  const { uid } = useParams<string>();
  const [player, setPlayer] = React.useState<Player | null>(null);
  const [matches, setMatches] = React.useState<Match[] | null>(null);
  const [allMatches, setAllMatches] = React.useState<Match[] | null>(null);
  const [visible, setVisible] = React.useState<boolean>(true);

  React.useEffect(() => {
    PlayerUtils.fetchPlayer(uid).then((result: Player) => {
      setPlayer(result);
    });
    MatchUtils.fetchAllMatches(uid).then((result: Match[]) => {
      setMatches(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ position: "relative" }}>
      {player && matches ? (
        <>
          <LoadingOverlay visible={visible} />
          <DashboardPageComponent
            player={player}
            matches={matches}
            setVisible={() => setVisible(false)}
          />
        </>
      ) : (
        <p>Error: ID doesn't correspond with a player. Please try again.</p>
      )}
    </div>
  );
};

export default DashboardPageContainer;
