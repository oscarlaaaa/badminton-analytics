import * as React from "react";
import SearchResultsComponent from "./SearchResultsComponent";

type ResultType = {
  suggestions: any[];
};

interface ResultProps {
  props: ResultType;
}

const SearchResultsContainer: React.FC<ResultProps> = ({ props }) => {
  return (
    <div>
      {props.suggestions ? (
        <SearchResultsComponent props={props} />
      ) : (
        <h1>No results found.</h1>
      )}
    </div>
  );
};

export default SearchResultsContainer;
