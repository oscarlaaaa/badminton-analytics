import * as React from 'react'
import { TopPlayer } from '../../../types/DataTypes';
import * as SearchUtils from '../../../utils/SearchUtils';
import TopPlayersComponent from './TopPlayersComponent';
import '../../../styles/TopPlayers.css';

interface TopPlayersContainerProps {
  event: string;
  count: number;
}

const TopPlayersContainer: React.FC<TopPlayersContainerProps> = (props) => {
  const [topPlayers, setTopPlayers] = React.useState<TopPlayer[]>(null);

  React.useEffect(() => {
    SearchUtils.fetchTopPlayers(props.event, props.count)
    .then((players: TopPlayer[]) => {
      setTopPlayers(players);
    });
  }, []);

  return (
    <div id="top-players-container">
      <h2>Top {props.event} Players by Wins</h2>
      {topPlayers ? <TopPlayersComponent players={topPlayers} /> : <p>Error loading top players.</p>}
    </div>
  )
}

export default TopPlayersContainer