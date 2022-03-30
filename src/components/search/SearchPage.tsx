import * as React from "react";
import * as SearchUtils from "../../utils/SearchUtils";
import { Player } from "../../types/DataTypes";
import SearchBarContainer from "./search_bar/SearchBarContainer";
import SearchResultsContainer from "./search_results/SearchResultsContainer";
import TopPlayersContainer from "./top_players/TopPlayersContainer";

import { Skeleton, Center, Paper } from "@mantine/core";

const SearchPage: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [suggestions, setSuggestions] = React.useState<Player[]>(null);
  const [noSuggestions, setNoSuggestions] = React.useState<string>(null);
  const [loadingError, setLoadingError] = React.useState<boolean>(false);
  const [firstClick, setFirstClick] = React.useState<boolean>(false);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const onSearch = (): void => {
    setIsLoading(true);
    setFirstClick(true);
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
    <Center
      style={{
        textAlign: "center",
        width: "97vw",
        height: "97vh",
      }}
    >
      <div
        id="search-area"
        style={{ height: "100%", margin: "3%" }}
      >
        <h1
          style={{
            marginTop: "6%",
            marginBottom: "0",
            textAlign: "left",
            fontSize: "58pt",
          }}
        >
          Badminton <br />
          Analytics Dashboard
        </h1>
        <p style={{ fontSize: "14pt", textAlign: "left" }}>
          Built using TypeScript, React, Python, AWS Lambda (soon), Heroku, and
          the <a href="https://api.badminton-api.com">Badminton Singles API</a>.
        </p>
        <SearchBarContainer
          text={text}
          onTextChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onTextChange(event)
          }
          onSearch={() => onSearch()}
        />
        {firstClick && (
          <Skeleton height={isLoading ? "200px" : "auto"} visible={isLoading}>
            <SearchResultsContainer
              noSuggestions={noSuggestions}
              suggestions={suggestions}
            />
          </Skeleton>
        )}
      </div>
      {/* <div style={{ width: "30%" }}>
        <div
          style={{
            margin: "5%",
          }}
        >
          <Paper padding="sm" shadow="l" m="md">
            <TopPlayersContainer event={"MS"} count={5} />
          </Paper>
          <Paper padding="sm" shadow="l" m="md">
            <TopPlayersContainer event={"WS"} count={5} />
          </Paper>
        </div>
      </div> */}
      {loadingError && <p>Sorry, there was an error. Please try again.</p>}
    </Center>
  );
};

export default SearchPage;
