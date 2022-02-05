import * as React from "react";
import SearchBar from "./SearchBar";

const SearchBarContainer: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<string[] | null>([]);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return <SearchBar props={{
    text: text,
    suggestions: suggestions,
    onTextChange: (e) => onTextChange(e),
  }}/>;
};

export default SearchBarContainer;
