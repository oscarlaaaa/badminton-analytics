import * as React from "react";
import { Player, Set, Tournament } from "../../../types/DataTypes";
import * as MatchUtils from "../../../utils/MatchUtils";

interface SingleMatchProps {
  player: Player;
  matchSets: Set[];
}

const matchPointField = (points: string[]) => {
  return <td>
    {points.map((point) => {
      return <p>{point}</p>
  })}</td>;
};

const SingleMatchComponent: React.FC<SingleMatchProps> = ({ player, matchSets }) => {
  
  const points: string[] = MatchUtils.composeScores(matchSets);
  const duration: number = MatchUtils.composeDurations(matchSets);
  const [tournamentName, setTournamentName] = React.useState<string>("N/A");

  React.useEffect(() => {
    MatchUtils.fetchTournament(matchSets[0].tournamentId)
    .then((tournament: Tournament) => {
      setTournamentName(tournament.name);
    })
  }, []);

  return <tr>
    <td>{matchSets[0].winnerId === player.id ? player.name : ""}</td>
    {matchPointField(points)}
    <td>{matchSets[0].loserId === player.id ? player.name : ""}</td>
    <td>{tournamentName}</td>
    <td>{duration}</td>
  </tr>;
};

export default SingleMatchComponent;
