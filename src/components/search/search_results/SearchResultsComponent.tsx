import * as React from "react";
import { Player } from "../../../types/DataTypes";
import SearchResultSuggestion from "./SearchResultSuggestion";
import { Table } from '@mantine/core';

interface ResultProps {
  suggestions: Player[];
}

const SearchResultsComponent: React.FC<ResultProps> = ({ suggestions }) => {
  
  return (
    <Table id="search-results" >
      <tbody>
        {suggestions.map((player: Player) => {
          return <SearchResultSuggestion player={player} />;
        })}
      </tbody>
    </Table>
  );
};

export default SearchResultsComponent;
