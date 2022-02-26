import * as React from "react";
import SearchBarComponent from "./SearchBarComponent";

interface SearchProps {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBarContainer: React.FC<SearchProps> = (props): React.ReactElement => {
  React.useEffect(() => {
    console.log(props.text);
  }, [props.text]);

  return (
    <div style={{ margin: "5%" }}>
      <SearchBarComponent
        text={props.text}
        onTextChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onTextChange(e)
        }
      />
      <button
        name="button"
        onClick={(e) => {
          e.preventDefault();
          props.onSearch();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBarContainer;
