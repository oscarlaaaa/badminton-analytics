import * as React from "react";
import { useParams } from "react-router-dom";
import SearchBarContainer from "../landing/SearchBarContainer";

const SearchPage: React.FC = (): React.ReactElement => {
  let { name } = useParams();
  return (
    <div>
      <h1>This is the search page. You searched for {name} </h1>
      <SearchBarContainer />
    </div> 
  );
};

export default SearchPage;
