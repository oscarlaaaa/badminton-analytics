import { createStyles, Container, Chip, Chips, Skeleton } from "@mantine/core";
import * as React from "react";
import { useMediaQuery } from '@mantine/hooks';
import { CoolStats } from "../../../types/OtherTypes";
import OtherStatsComponent from "./OtherStatsComponent";
import TotalStatsComponent from "./TotalStatsComponent";
import StreakStatsComponent from "./StreakStatsComponent";

interface CoolStatsProps {
  coolStats: CoolStats;
}
const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef("iconWrapper"),
  },

  checked: {
    backgroundColor: `${theme.colors.red[4]} !important`,
    color: theme.colors.black,
    border: theme.white,

    [`& .${getRef("iconWrapper")}`]: {
      color: theme.colors.red[6],
      backgroundColor: `${theme.colors.red[6]} !important`,
    },
  },
}));


const CoolStatsComponent: React.FC<CoolStatsProps> = ({ coolStats }) => {
  React.useEffect(() => {
    console.log(coolStats);
  }, [])
  const largeScreen = useMediaQuery('(min-width: 1280px)');
  const [display, setDisplay] = React.useState<string>("streaks");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { classes } = useStyles();

  function artificialLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }

  return (
    <Container
    fluid
    style={{ width: largeScreen ? "47%" : "98%", margin: largeScreen ? "5px auto 5px 0" : "5px auto" }}
  >
    <Chips
      color="red"
      classNames={classes}
      style={{ margin: "auto" }}
      size="md"
      value={display}
      onChange={setDisplay}
      multiple={false}
    >
      <Chip
        style={{ margin: "7px auto" }}
        onClick={artificialLoading}
        value="streaks"
      >
        Streaks
      </Chip>
      <Chip
        style={{ margin: "7px auto" }}
        onClick={artificialLoading}
        value="totals"
      >
        Totals
      </Chip>
      <Chip
        style={{ margin: "7px auto" }}
        onClick={artificialLoading}
        value="other"
      >
        Other
      </Chip>
    </Chips>
    <Skeleton visible={loading} height={275} width={"100%"}>
      {display === "streaks" && (
        <StreakStatsComponent
        coolStats={coolStats}
        />
      )}
      {display === "totals" && (
        <TotalStatsComponent
        coolStats={coolStats}
        />
      )}
      {display === "other" && (
        <OtherStatsComponent coolStats={coolStats} />
      )}
    </Skeleton>
  </Container>
  );
};

export default CoolStatsComponent;
