import * as React from "react";
import { TextInput } from "@mantine/core";
import SearchBarButton from "./SearchBarButton";

interface SearchProps {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBarComponent: React.FC<SearchProps> = (props): JSX.Element => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.onSearch();
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TextInput
        placeholder="Type to search for a player"
        variant="default"
        style={{ width: "90%" }}
        size="md"
        value={props.text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onTextChange(e);
        }}
        onKeyPress={handleKeyPress}
      />
      <SearchBarButton onSearch={() => props.onSearch()} />
    </div>
  );
};

export default SearchBarComponent;