import * as React from "react";
import { fetchHeadToHeadRecord } from "../../../utils/PlayerUtils";
import AllHeadToHeadComponent from "./AllHeadToHeadComponent";

const HEAD_TO_HEAD_LIMIT = 5000;

interface HeadToHeadHistoryProps {
  player: string;
  done: () => void;
}

const AllHeadToHeadContainer: React.FC<HeadToHeadHistoryProps> = ({
  player,
  done,
}) => {
  const [h2h, setH2h] = React.useState(null);

  React.useEffect(() => {
    const setWinsAndLossesCount = async (player: string) => {
      let h2hOutput = {};

      let h2hrecords = await fetchHeadToHeadRecord(
        player,
        true,
        true,
        HEAD_TO_HEAD_LIMIT
      );

      for (let record of h2hrecords) {
        let x = record.wins + ":" + record.losses;

        if (x in h2hOutput) {
          h2hOutput[x]["count"] += 1;
        } else {
          h2hOutput[x] = {
            wins: record.wins,
            losses: record.losses,
            count: 1,
          };
        }
      }

      const keys = Object.keys(h2hOutput);
      let h2hArrayOutput = [];
      keys.forEach((key, index) => {
        console.log(key);
        console.log(index);
        h2hArrayOutput.push(h2hOutput[key]);
      });
      console.log(h2hArrayOutput);
      setH2h(h2hArrayOutput);
      done();
    };

    setWinsAndLossesCount(player);
  }, []);

  return h2h && <AllHeadToHeadComponent h2h={h2h} />;
};

export default AllHeadToHeadContainer;
