import * as React from "react";
import { TopPlayer } from "../../../types/DataTypes";
import { List, Text, ThemeIcon, Space } from "@mantine/core";
import { AiTwotoneCrown } from "react-icons/ai";
import {
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
  RiAnchorFill,
} from "react-icons/ri";

interface TopPlayersComponentProps {
  players: TopPlayer[];
}

function determineIcon(rank: number): JSX.Element {
  switch (rank) {
    case 0:
      return (
        <ThemeIcon color="yellow" size={24} radius="xl">
          <AiTwotoneCrown />
        </ThemeIcon>
      );
    case 1:
      return (
        <ThemeIcon color="gray" size={24} radius="xl">
          <RiNumber2 />
        </ThemeIcon>
      );

    case 2:
      return (
        <ThemeIcon color="orange" size={24} radius="xl">
          <RiNumber3 />
        </ThemeIcon>
      );

    case 3:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiNumber4 />
        </ThemeIcon>
      );
    case 4:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiNumber5 />
        </ThemeIcon>
      );

    case 5:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiNumber6 />
        </ThemeIcon>
      );
    case 6:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiNumber7 />
        </ThemeIcon>
      );
    case 7:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiNumber8 />
        </ThemeIcon>
      );
    case 8:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiNumber9 />
        </ThemeIcon>
      );
    case 9:
      return (
        <ThemeIcon color="red" size={24} radius="sm">
          <RiAnchorFill />
        </ThemeIcon>
      );
  }
}

const TopPlayersComponent: React.FC<TopPlayersComponentProps> = ({
  players,
}) => {
  return (
    <List spacing={2} size="sm" center>
      {players.map((player, rank) => {
        let playerLink = "/dashboard/" + player.winnerId;
        return (
          <List.Item icon={determineIcon(rank)}>
            <Text>
              {player.wins} - <a href={playerLink}>{player.name}</a>
            </Text>
            <Text></Text>
          </List.Item>
        );
      })}
    </List>
  );
};

export default TopPlayersComponent;
