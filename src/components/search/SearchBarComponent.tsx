import * as React from "react";

type SearchType = {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface SearchProps {
  props: SearchType;
}

const SearchBarComponent: React.FC<SearchProps> = ({ props }): JSX.Element => {
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
    </>
  );
};

export default SearchBarComponent;
