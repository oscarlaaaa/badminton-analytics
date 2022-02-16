import * as React from 'react'
import { Match } from "../../../types/DataTypes";


interface MatchHistoryProps {
    matches: Match[];
}

const MatchHistoryComponent: React.FC<MatchHistoryProps> = ({ matches }) => {
  return (
    <div>MatchHistory</div>
  )
}

export default MatchHistoryComponent