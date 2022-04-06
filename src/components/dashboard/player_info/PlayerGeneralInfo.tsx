import * as React from "react";
import { Player } from "../../../types/DataTypes";
import { Container, Grid, Center } from "@mantine/core";

interface PlayerSuggestionProps {
  player: Player;
}

const PlayerGeneralInfo: React.FC<PlayerSuggestionProps> = ({ player }) => {
  return (
    <Container fluid style={{ maxWidth: "1200px",width: "100%", margin: "5px auto" }}>
      <Center>
        <h1 style={{ fontSize: "32pt" }}>{player.name}</h1>
        <div>
          <ul>
            <li>
              <b>ID:</b> {player.id ?? "N/A"}
            </li>
            <li>
              <b>Country: </b>
              {player.country ?? "N/A"}
            </li>
            <li>
              <b>Event: </b>
              {player.event ?? "N/A"}
            </li>
            <li>
              <b>BirthDate: </b>
              {player.birthDate ?? "N/A"}
            </li>
            <li>
              <b>Playing Hand: </b>
              {player.playHand ?? "N/A"}
            </li>
            <li>
              <b>Height: </b>
              {player.height ? player.height + "cm" : "N/A"}{" "}
            </li>
          </ul>
        </div>
      </Center>
    </Container>
  );
};

export default PlayerGeneralInfo;
