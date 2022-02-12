import * as React from "react";
import * as Utils from "../../utils/SearchUtils";
import SearchBarContainer from "./SearchBarContainer";
import SearchResultsContainer from "./SearchResultsContainer";

const SearchPage: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [suggestions, setSuggestions] = React.useState<any>(null);
  const [noSuggestions, setNoSuggestions] = React.useState<boolean>(false);
  const [loadingError, setLoadingError] = React.useState<boolean>(false);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const onSearch = () => {
    setIsLoading(true);
    Utils.fetchSuggestions(text).then(
      (suggest) => {
        setSuggestions(suggest ?? null);
        setNoSuggestions(suggest === undefined)
        setIsLoading(false);
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
        <SearchResultsContainer props={{ suggestions: suggestions }} />
      )}
      {noSuggestions && <p>No players with '{text}' in their name could be found. Please search again.</p>}
      {loadingError && <p>Sorry, there was an error. Please try again.</p>}
    </div>
  );
};

export default SearchPage;
