import * as React from "react";
import { Player, Match, Set, Tournament } from "../../../types/DataTypes";
import * as MatchUtils from "../../../utils/MatchUtils";
import * as PlayerUtils from "../../../utils/PlayerUtils";
import SingleMatchComponent from "./SingleMatchComponent";

interface SingleMatchContainerProps {
  player: Player;
  match: Match;
}

const SingleMatchContainer: React.FC<SingleMatchContainerProps> = ({
  player,
  match,
}) => {
  const [tournamentName, setTournamentName] = React.useState<string>("Loading");
  const [winnerName, setWinnerName] = React.useState<string>("Loading");
  const [loserName, setLoserName] = React.useState<string>("Loading");
  const [points, setPoints] = React.useState<string[]>([]);
  const [duration, setDuration] = React.useState<number | null>(null);

  function allLoaded() {
    return (
      winnerName !== "Loading" &&
      loserName !== "Loading" &&
      tournamentName !== "Loading"
    );
  }

  React.useEffect(() => {
    MatchUtils.fetchSets(
      match.winnerId,
      match.loserId,
      match.tournamentId
    ).then((sets: Set[]) => {
      setDuration(sets[0].duration);

      setPoints(MatchUtils.composeScores(sets));

      // Get winner name if not in cache
      PlayerUtils.fetchPlayer(sets[0].winnerId).then((player: Player) => {
        setWinnerName(player.name);
      });

      // Get loser name if not in cache
      PlayerUtils.fetchPlayer(sets[0].loserId).then((player: Player) => {
        setLoserName(player.name);
      });

      // Get tournament name if not in cache
      MatchUtils.fetchTournament(sets[0].tournamentId).then(
        (tournament: Tournament) => {
          setTournamentName(tournament.name);
        }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return allLoaded() ? (
    <SingleMatchComponent
      player={player}
      winnerName={winnerName}
      loserName={loserName}
      points={points}
      tournamentName={tournamentName}
      duration={duration}
    />
  ) : (
    <tr>
      <td></td>
      <td></td>
      <td style={{ backgroundColor: "grey" }}>
        <b>LOADING</b>
      </td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default SingleMatchContainer;
