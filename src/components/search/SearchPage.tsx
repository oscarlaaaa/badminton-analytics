import * as React from "react";
import * as PlayerUtils from "../../utils/PlayerUtils";
import { Player } from "../../types/DataTypes";
import SearchBarContainer from "./search_bar/SearchBarContainer";
import SearchResultsContainer from "./search_results/SearchResultsContainer";

import { Skeleton, Center } from "@mantine/core";

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
    PlayerUtils.fetchSuggestions(text).then(
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
        height: "100%",
        minHeight: "97vh",
        margin: "auto",
        backgroundColor: "white",
        borderRadius: "10px"
      }}
    >
      <div
        id="search-area"
        style={{ height: "100%", margin: "3%" }}
      >
        <h1
          style={{
            marginBottom: "0",
            textAlign: "left",
            fontSize: "48pt",
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
      {loadingError && <p>Sorry, there was an error. Please try again.</p>}
    </Center>
  );
};

export default SearchPage;
