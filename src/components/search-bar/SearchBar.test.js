import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";

import rootReducer from "../../reducers";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import SearchBar from ".";

describe("SearchBar component", () => {
  it("displays a search form", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <SearchBar />
        </ThemeProvider>
      </Provider>
    );

    const searchForm = screen.getByRole("search");
    expect(searchForm).toBeInTheDocument();
  });
});
