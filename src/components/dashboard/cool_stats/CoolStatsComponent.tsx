import { Container } from "@mantine/core";
import * as React from "react";
import { useMediaQuery } from '@mantine/hooks';
import { CoolStats } from "../../../types/OtherTypes";

interface CoolStatsProps {
  coolStats: CoolStats;
}

const CoolStatsComponent: React.FC<CoolStatsProps> = ({ coolStats }) => {
  React.useEffect(() => {
    console.log(coolStats);
  }, [])
  const largeScreen = useMediaQuery('(min-width: 1280px)');
  return (
    <Container
      fluid
      style={{width: largeScreen ? "47%" : "98%", margin: largeScreen ? "5px auto 5px 0" : "5px auto"}}
    >
      heh
    </Container>
  );
};

export default CoolStatsComponent;
