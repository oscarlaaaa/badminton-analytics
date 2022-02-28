import * as React from 'react';
import { Button } from '@mantine/core';

const SearchButton: React.FC<{ onSearch }> = (props): JSX.Element => {
  return (
    <Button
      size="md"
      variant="filled"
      color="red" 
      onClick={(e) => {
        e.preventDefault(e);
        props.onSearch();
      }}
    > Search </Button>
  );
};

export default SearchButton;