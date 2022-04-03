import * as React from 'react';
import { Button } from '@mantine/core';
import { GiShuttlecock } from 'react-icons/gi'; 

const SearchButton: React.FC<{ onSearch }> = (props): JSX.Element => {
  return (
    <Button
      size="md"
      style={{padding: "10px"}}
      variant="filled"
      color="red" leftIcon={<GiShuttlecock style={{height: "25px", width: "25px"}} />}
      onClick={(e) => {
        e.preventDefault(e);
        props.onSearch();
      }}
    > Search! </Button>
  );
};

export default SearchButton;