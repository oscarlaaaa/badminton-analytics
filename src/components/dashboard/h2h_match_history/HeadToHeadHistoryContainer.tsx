import * as React from "react";
import { fetchHeadToHeadRecord } from "../../../utils/SearchUtils";
import { HeadToHeadRecord } from "../../../types/DataTypes";
import HeadToHeadHistoryComponent from "./HeadToHeadHistoryComponent";

const HeadToHeadHistoryContainer = ({ player, wins }) => {
  const [history, setHistory] = React.useState<HeadToHeadRecord[] | null>(null);

  React.useEffect(() => {
    fetchHeadToHeadRecord(player, wins, true).then((result) => {
      setHistory(result);
    });
  }, []);

  return (
    history && <HeadToHeadHistoryComponent history={history} wins={wins} />
  );
};

export default HeadToHeadHistoryContainer;
