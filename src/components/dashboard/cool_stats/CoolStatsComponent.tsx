import { Container } from "@mantine/core";
import * as React from "react";
import { useMediaQuery } from '@mantine/hooks';

const CoolStatsComponent = () => {
  const largeScreen = useMediaQuery('(min-width: 1280px)');
  return (
    <Container
      fluid
      style={{width: largeScreen ? "46%" : "96%", margin: "10px"}}
    >
      heh
    </Container>
  );
};

export default CoolStatsComponent;
