import React from "react";
import {
  FilterContainer,
  SearchButton,
  SearchCard,
  SearchInput,
  SearchForm,
} from "./style";
import { Button } from "../../styled-components/Buttons";
import { Label } from "../../styled-components/Typography";
import { withTheme } from "styled-components";

const SearchBar = ({ theme }) => {
  return (
    <SearchCard>
      <SearchForm role="search">
        <SearchInput type="text" maxLength={30} />
        <SearchButton>
          <span class="material-symbols-outlined">search</span>
        </SearchButton>
      </SearchForm>
      <FilterContainer>
        <div>
          <Label as="span" color={theme.colors.disabled}>
            Searching for:
          </Label>
          <Label as="span">Favorite Programming language?</Label>
        </div>
        <Button
          marginLeftLarge="30px"
          backgroundColor={theme.colors.cancelAction}
        >
          Clear filters <span class="material-symbols-outlined">close</span>
        </Button>
      </FilterContainer>
    </SearchCard>
  );
};

export default withTheme(SearchBar);
