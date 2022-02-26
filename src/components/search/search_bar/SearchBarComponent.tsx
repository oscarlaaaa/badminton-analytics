import * as React from "react";

interface SearchProps {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBarComponent: React.FC<SearchProps> = (props): JSX.Element => {
  return (
      <input 
        style={{"marginRight":"25px", "width":"40%"}}
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search player name..."
        onChange={(e) => {
          props.onTextChange(e);
        }}
      ></input>
  );
};

export default SearchBarComponent;
