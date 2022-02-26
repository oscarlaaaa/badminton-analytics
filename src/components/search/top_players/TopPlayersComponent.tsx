import * as React from 'react';
import { TopPlayer } from '../../../types/DataTypes';

interface TopPlayersComponentProps {
  players: TopPlayer[];
}

const TopPlayersComponent: React.FC<TopPlayersComponentProps> = ({ players }) => {
  return (
    <table id="top-players-table">
      <tr>
        <th>Rank</th>
        <th>Wins</th>
        <th>Name</th>
      </tr>
      {players.map((player, rank) => {
        let playerLink = "/dashboard/" + player.winnerId;
        return <tr>
          <td>{rank + 1}</td>
          <td>{player.wins}</td>
          <td><a href={playerLink}>{player.name}</a></td>
        </tr>
      })}
    </table>
  )
}

export default TopPlayersComponent