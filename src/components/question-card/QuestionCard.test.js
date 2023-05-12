import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router";

import rootReducer from "../../reducers";
import QuestionCard from ".";
import { defaultTheme } from "../../theme";

describe("question card component", () => {
  it("displays a thumbnail", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionCard
              thumbnail="https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)"
              question="Favorite programming language?"
            />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const thumbnail = screen.getByRole("img", { name: /question thumbnail/i });
    expect(thumbnail).toBeInTheDocument();
  });

  it("displays a question", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionCard
              thumbnail="https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)"
              question="Favorite programming language?"
            />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const question = screen.getByText(/Favorite programming language?/i);
    expect(question).toBeInTheDocument();
  });
});
