import { createStyles, Container, Chips, Chip, Skeleton } from "@mantine/core";
import * as React from "react";
import AllHeadToHeadContainer from "./AllHeadToHeadContainer";
import HeadToHeadHistoryContainer from "./HeadToHeadHistoryContainer";
import { useMediaQuery } from "@mantine/hooks";

interface GeneralH2HProps {
  player: string;
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

const GeneralHeadToHeadComponent: React.FC<GeneralH2HProps> = ({ player }) => {
  const [display, setDisplay] = React.useState<string>("wins");
  const [loading, setLoading] = React.useState<boolean>(false);
  const largeScreen = useMediaQuery("(min-width: 1280px)");
  const { classes } = useStyles();

  function doneLoading() {
    setLoading(false);
  }

  React.useEffect(() => {}, [display]);

  return (
    <Container
      fluid
      style={{ width: largeScreen ? "46%" : "96%", margin: "10px" }}
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
          onClick={() => setLoading(true)}
          value="wins"
        >
          Wins
        </Chip>
        <Chip
          style={{ margin: "7px auto" }}
          onClick={() => setLoading(true)}
          value="losses"
        >
          Losses
        </Chip>
        <Chip
          style={{ margin: "7px auto" }}
          onClick={() => setLoading(true)}
          value="distribution"
        >
          Distribution
        </Chip>
      </Chips>
      <Skeleton visible={loading} height={275} width={"100%"}>
        {display === "wins" && (
          <HeadToHeadHistoryContainer
            player={player}
            wins={true}
            done={() => doneLoading()}
          />
        )}
        {display === "losses" && (
          <HeadToHeadHistoryContainer
            player={player}
            wins={false}
            done={() => doneLoading()}
          />
        )}
        {display === "distribution" && (
          <AllHeadToHeadContainer player={player} done={() => doneLoading()} />
        )}
      </Skeleton>
    </Container>
  );
};

export default GeneralHeadToHeadComponent;
