import * as React from "react";
import SearchBar from "./SearchBar";

const SearchBarContainer: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<string[] | null>(null);

  React.useEffect(() => {
    console.log(text);
  }, [text]);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return (
    <SearchBar
      props={{
        text: text,
        suggestions: suggestions,
        onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          onTextChange(e),
      }}
    />
  );
};

export default SearchBarContainer;
