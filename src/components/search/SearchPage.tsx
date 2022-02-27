import * as React from "react";
import * as SearchUtils from "../../utils/SearchUtils";
import { Player } from "../../types/DataTypes";
import SearchBarContainer from "./search_bar/SearchBarContainer";
import SearchResultsContainer from "./search_results/SearchResultsContainer";
import TopPlayersContainer from "./top_players/TopPlayersContainer";

import { Skeleton, Paper } from "@mantine/core";

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
    <div
      style={{
        textAlign: "center",
        width: "90vw",
        height: "90vh",
        margin: "4vh 4vw 4vh 4vw",
      }}
    >
      <h1>Badminton Analytics Dashboard</h1>
      <p style={{ fontSize: "14pt" }}>
        Built using TypeScript, React, Redux (soon), AWS Lambda (soon), Heroku,
        and the{" "}
        <a href="https://api.badminton-api.com">Badminton Singles API</a>
      </p>

      <SearchBarContainer
        text={text}
        onTextChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onTextChange(event)
        }
        onSearch={() => onSearch()}
      />
      <Skeleton height={isLoading ? "200px" : "auto"} visible={isLoading}>
        <SearchResultsContainer
          noSuggestions={noSuggestions}
          suggestions={suggestions}
        />
      </Skeleton>
      {!suggestions && (
        <div
          style={{
            display: "flex",
            margin: "5%",
            justifyContent: "space-evenly",
          }}
        >
          <Paper padding="xl" shadow="l">
            <TopPlayersContainer event={"MS"} count={10} />
          </Paper>
          <Paper padding="xl" shadow="l">
            <TopPlayersContainer event={"WS"} count={10} />
          </Paper>
        </div>
      )}
      {loadingError && <p>Sorry, there was an error. Please try again.</p>}
    </div>
  );
};

export default SearchPage;
