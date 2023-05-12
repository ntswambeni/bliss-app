import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { withTheme } from "styled-components";

import {
  FilterContainer,
  SearchButton,
  SearchCard,
  SearchInput,
  SearchForm,
} from "./style";
import { Button } from "../../styled-components/Buttons";
import { Label } from "../../styled-components/Typography";
import { handleFilterQuestions } from "../../actions/questions";
import { handleClearQuestionsFilter } from "../../actions/questions";

const SearchBar = ({ dispatch, searchOffset, theme }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();

  useEffect(() => {
    if (searchParams.get("filter") !== null) {
      searchInputRef.current.focus();
      loadFilteredQuestions();
    }
  }, []);

  const loadFilteredQuestions = () => {
    dispatch(
      handleFilterQuestions({
        limit: 10,
        offset: searchOffset,
        filter: searchQuery,
      })
    );
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(handleClearQuestionsFilter());
    setSearchParams({ filter: searchQuery });
    loadFilteredQuestions();
    setSearchQuery("");
  };

  const handleClearFilter = () => {
    setSearchParams();
    dispatch(handleClearQuestionsFilter());
    setSearchQuery("");
  };

  return (
    <SearchCard>
      <SearchForm role="search">
        <SearchInput
          type="text"
          maxLength={30}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          ref={searchInputRef}
        />
        <SearchButton
          onClick={handleSearch}
          type="submit"
          disabled={searchQuery === ""}
        >
          <span className="material-symbols-outlined">search</span>
        </SearchButton>
      </SearchForm>
      {searchParams.get("filter") !== null && (
        <FilterContainer>
          <div>
            <Label as="span" color={theme.colors.disabled}>
              Searching for:
            </Label>
            <Label as="span">{searchParams.get("filter")}</Label>
          </div>
          <Button
            type="button"
            marginLeftLarge="30px"
            backgroundColor={theme.colors.cancelAction}
            color={theme.colors.surface}
            onClick={handleClearFilter}
          >
            Clear filters{" "}
            <span className="material-symbols-outlined">close</span>
          </Button>
        </FilterContainer>
      )}
    </SearchCard>
  );
};

const mapStateToProps = ({ searchOffset }) => ({
  searchOffset,
});

export default connect(mapStateToProps)(withTheme(SearchBar));
