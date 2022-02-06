import * as React from "react";
import { Link } from "react-router-dom";

type SearchType = {
  text: string;
  suggestions: string[];
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface SearchProps {
  props: SearchType;
}

const SearchBar: React.FC<SearchProps> = ({ props }): JSX.Element => {
  return (
    <>
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search player name..."
        onChange={(e) => {
          props.onTextChange(e);
        }}
      ></input>
      <Link to={props.text}>
        <input
          type="button"
          name="search-button"
          id="search-button"
          value="search"
        />
      </Link>
    </>
  );
};

export default SearchBar;
