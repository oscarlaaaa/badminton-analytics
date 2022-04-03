import * as React from "react";
import { fetchHeadToHeadRecord, fetchPlayer } from "../../../utils/PlayerUtils";
import { HeadToHeadRecord } from "../../../types/DataTypes";
import HeadToHeadHistoryComponent from "./HeadToHeadHistoryComponent";

const HEAD_TO_HEAD_LIMIT = 5;

interface HeadToHeadHistoryProps {
  player: string,
  wins: boolean
}

const HeadToHeadHistoryContainer: React.FC<HeadToHeadHistoryProps> = ({ player, wins }) => {
  const [history, setHistory] = React.useState(null);

  React.useEffect(() => {
    const setNames = async (player: string, wins: boolean) => {
      let h2hrecords = await fetchHeadToHeadRecord(player, wins, true, HEAD_TO_HEAD_LIMIT);

      await Promise.all(h2hrecords.map(async (record) => {
        const grabbedPlayer = await fetchPlayer(record.opponent);
        record['name'] = grabbedPlayer.name;
        record['imgLink'] = grabbedPlayer.imgLink;
      }));
      setHistory(h2hrecords);
    }

    setNames(player, wins);
  }, []);

  return (
    history && <HeadToHeadHistoryComponent history={history} wins={wins} />
  );
};

export default HeadToHeadHistoryContainer;
