import * as React from "react";
import CoolStatsComponent from "./CoolStatsComponent";

interface CoolStatsProps {
  player: string;
}
const CoolStatsContainer: React.FC<CoolStatsProps> = ({ player }) => {

  return <CoolStatsComponent></CoolStatsComponent>;
};

export default CoolStatsContainer;
