import * as React from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  let { name } = useParams();
  return (
    <div>
      <h1>This is the search page. You searched for {name} </h1>
    </div> 
  );
};

export default SearchPage;
