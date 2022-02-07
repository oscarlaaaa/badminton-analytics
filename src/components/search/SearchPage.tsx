import * as React from "react";
import SearchBarContainer from "./SearchBarContainer";
import SearchResultsContainer from "./SearchResultsContainer";

const fetchSuggestions = async (text: string): Promise<any> => {
  text.replace(" ", "%20");
  return fetch("https://badminton-api.com/player/search?name=" + text + "&limit=25")
    .then(
      (res) => {
        return res.json();
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    )
    .then(
      (result) => {
        console.log(result);
        return Promise.resolve(result);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};

const SearchPage: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [suggestions, setSuggestions] = React.useState<any>(null);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const onSearch = () => {
    setIsLoading(true);
    fetchSuggestions(text).then((suggest) => {
      console.log(suggest);
      setSuggestions(suggest.data ?? null);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <h1>This is the search page.</h1>
      {isLoading && <h1 style={{ fontSize: "50pt" }}>LOADING</h1>}
      <SearchBarContainer
        props={{
          text: text,
          setText: (text: string) => setText(text),
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
    </div>
  );
};

export default SearchPage;
