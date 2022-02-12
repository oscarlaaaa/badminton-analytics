import * as React from "react";
import SearchBar from "./SearchBarComponent";

type SearchType = {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface SearchProps {
  props: SearchType;
}

const SearchBarContainer: React.FC<SearchProps> = ({ props }): React.ReactElement => {
  React.useEffect(() => {
    console.log(props.text);
  }, [props.text]);

  
  return (
    <SearchBar
      props={{
        text: props.text,
        onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          props.onTextChange(e),
      }}
    />
  );
};

export default SearchBarContainer;
