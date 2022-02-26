import * as React from "react";
import * as SearchUtils from "../../utils/SearchUtils";
import { Player } from "../../types/DataTypes";
import SearchBarContainer from "./search_bar/SearchBarContainer";
import SearchResultsContainer from "./search_results/SearchResultsContainer";
import TopPlayersContainer from './top_players/TopPlayersContainer';

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
    <div style={{"textAlign": "center"}}>
      <h1>Badminton Analytics Dashboard</h1>
      <p style={{"fontSize": "14pt"}}>Built using TypeScript, React, Redux (soon), AWS Lambda (soon), Heroku, and the <a href="https://api.badminton-api.com">Badminton Singles API</a></p>
      <div style={{"display": "flex", "alignContent":"space-evenly"}}>
        <TopPlayersContainer event={"MS"} count={10} />
        <TopPlayersContainer event={"WS"} count={10} />
      </div>
      <SearchBarContainer
          text={text}
          onTextChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onTextChange(event)}
          onSearch={() => onSearch()}
      />
      {isLoading && <h1 style={{ fontSize: "50pt" }}>LOADING</h1>}
      {suggestions && (
        <SearchResultsContainer suggestions={suggestions} />
      )}
      {noSuggestions && <p>No players with '{noSuggestions}' in their name could be found. Please check your spelling and try again.</p>}
      {loadingError && <p>Sorry, there was an error. Please try again.</p>}
    </div>
  );
};

export default SearchPage;
