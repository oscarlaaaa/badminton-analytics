import * as React from "react";
import SearchBarComponent from "./SearchBarComponent";

interface SearchProps {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBarContainer: React.FC<SearchProps> = (props): React.ReactElement => {

  return (
      <SearchBarComponent
        text={props.text}
        onTextChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onTextChange(e)
        }
        onSearch={() => props.onSearch()}
      />
      
  );
};

export default SearchBarContainer;
