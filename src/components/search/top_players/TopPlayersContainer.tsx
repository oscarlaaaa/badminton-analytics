import * as React from 'react'
import { TopPlayer } from '../../../types/DataTypes';
import * as PlayerUtils from '../../../utils/PlayerUtils';
import TopPlayersComponent from './TopPlayersComponent';
import '../../../styles/TopPlayers.css';

interface TopPlayersContainerProps {
  event: string;
  count: number;
}

const TopPlayersContainer: React.FC<TopPlayersContainerProps> = (props) => {
  const [topPlayers, setTopPlayers] = React.useState<TopPlayer[]>(null);

  React.useEffect(() => {
    PlayerUtils.fetchTopPlayers(props.event, props.count)
    .then((players: TopPlayer[]) => {
      setTopPlayers(players);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="top-players-container">
      <h2>Top {props.event} Players by Wins</h2>
      {topPlayers ? <TopPlayersComponent players={topPlayers} /> : <p>Error loading top players.</p>}
    </div>
  )
}

export default TopPlayersContainer