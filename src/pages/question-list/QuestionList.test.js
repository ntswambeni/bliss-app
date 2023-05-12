import { configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

import rootReducer from "../../reducers";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import QuestionList from "./QuestionList";

describe("QuestionList component", () => {
  it("displays 10 questions on load", async () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionList />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(async () => {
      const questionList = await screen.findAllByText(
        /Favourite programming language?/i
      );
      expect(questionList).toHaveLength(10);
    });
  });
});
