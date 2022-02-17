import * as React from 'react';
import { Player, Match, Set } from '../../../types/DataTypes';
import * as MatchUtils from '../../../utils/MatchUtils';
import SingleMatchComponent from './SingleMatchComponent';

interface SingleMatchProps {
  player: Player;
  match: Match;
}

const SingleMatchContainer: React.FC<SingleMatchProps> = ({ player, match }) => {
  const [matchSets, setMatchSets] = React.useState<Set[] | null>();
  React.useEffect(() => {
    MatchUtils.fetchSets(match.winnerId, match.loserId, match.tournamentId)
    .then((sets: Set[]) => {
      setMatchSets(sets);
    })
  }, []);

  return (
    (matchSets ? <SingleMatchComponent player={player} matchSets={matchSets} /> : null)
  )
}

export default SingleMatchContainer