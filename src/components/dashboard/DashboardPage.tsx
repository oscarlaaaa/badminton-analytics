import * as React from "react";
import { useParams } from "react-router-dom";
import * as Utils from "../../utils/SearchUtils";
import PlayerGeneralInfo from "./PlayerGeneralInfo";


const DashboardPage: React.FC = (): React.ReactElement => {
  const { uid } = useParams();
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    Utils.fetchPlayer(uid)
    .then((result) => {
        setPlayer(result);
    })
  }, [])
  return (
    <div>
      <h1>This is the dashboard page. The current player is {uid} </h1>
      {player ? <PlayerGeneralInfo props={player} /> : <p>No player was found.</p>}
    </div>
  );
};

export default DashboardPage;
