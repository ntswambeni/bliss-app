import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import rootReducer from "../../reducers";
import Navbar from "./index";
import { defaultTheme } from "../../theme";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
  it("displays the app logo", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <Navbar />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const logo = screen.getByText("Q?");
    expect(logo).toBeInTheDocument();
  });

  it("displays an user avatar and the username", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <Navbar />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const userAvatar = screen.getByRole("img", { name: "user avatar" });
    expect(userAvatar).toBeInTheDocument();

    const userName = screen.getByText(/Felizardo/i);
    expect(userName).toBeInTheDocument();
  });
});
