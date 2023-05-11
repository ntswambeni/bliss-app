import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import rootReducer from "../../reducers";
import QuestionCard from ".";
import { defaultTheme } from "../../theme";
import { MemoryRouter } from "react-router";

describe("question card component", () => {
  it("displays a thumbnail", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionCard />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const thumbnail = screen.getByRole("img", { name: /question thumbnail/i });
    expect(thumbnail).toBeInTheDocument();
  });

  it("displays a link to a detailed page", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionCard />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const thumbnail = screen.getByRole("link", { name: /Details/i });
    expect(thumbnail).toBeInTheDocument();
  });

  it("displays a link to a detailed page", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionCard />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Details/i });
    expect(link).toBeInTheDocument();
  });

  it("displays a question", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <QuestionCard />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const question = screen.getByText(/Favorite programming language?/i);
    expect(question).toBeInTheDocument();
  });
});
