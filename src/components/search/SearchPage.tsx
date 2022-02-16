import * as React from "react";
import * as SearchUtils from "../../utils/SearchUtils";
import { Player } from "../../types/DataTypes";
import SearchBarContainer from "./SearchBarContainer";
import SearchResultsContainer from "./SearchResultsContainer";

const SearchPage: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [suggestions, setSuggestions] = React.useState<Player[]>(null);
  const [noSuggestions, setNoSuggestions] = React.useState<string>(null);
  const [loadingError, setLoadingError] = React.useState<boolean>(false);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const onSearch = (): void => {
    setIsLoading(true);
    SearchUtils.fetchSuggestions(text).then(
      (suggest) => {
        setSuggestions(suggest ?? null);
        setNoSuggestions(suggest === undefined ? text : null);
        setIsLoading(false);
        setLoadingError(false);
      },
      (error) => {
        setIsLoading(false);
        setLoadingError(true);
      }
    );
  };

  return (
    <div>
      <h1>Badminton Analytics Dashboard</h1>
      {isLoading && <h1 style={{ fontSize: "50pt" }}>LOADING</h1>}
      <SearchBarContainer
        props={{
          text: text,
          onTextChange: (event: React.ChangeEvent<HTMLInputElement>) =>
            onTextChange(event),
        }}
      />
      <button
        name="button"
        onClick={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        Click me!
      </button>
      <button
        name="button"
        onClick={(e) => {
          e.preventDefault();
          console.log(suggestions);
        }}
      >
        Check!
      </button>
      {suggestions && (
        <SearchResultsContainer suggestions={suggestions} />
      )}
      {noSuggestions && <p>No players with '{noSuggestions}' in their name could be found. Please check your spelling and try again.</p>}
      {loadingError && <p>Sorry, there was an error. Please try again.</p>}
    </div>
  );
};

export default SearchPage;
