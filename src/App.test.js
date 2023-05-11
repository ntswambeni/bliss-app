import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { rest } from "msw";

import App from "./App";
import { defaultTheme } from "./theme";
import rootReducer from "./reducers";
import { server } from "./mocks/server";
import { act } from "react-dom/test-utils";

const APIURL = process.env.REACT_APP_API_URL;

describe("Application", () => {
  it("should display a loading screen while the health server is checked", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    );
    const message = screen.getByText(/loading app.../i);
    expect(message).toBeInTheDocument();
  });

  it("should display a retry widget and an error message if server is NOT OK", async () => {
    const store = configureStore({ reducer: rootReducer });
    server.resetHandlers(
      rest.get(`${APIURL}/health`, (req, res, ctx) => res(ctx.status(500)))
    );
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    );

    //Check if the return widget is displayed
    const retryButton = await screen.findByRole("button");
    expect(retryButton).toBeInTheDocument();

    //Check if the error message is displayed
    const errorMessage = await screen.findByText(
      /Sorry, we could not connect to the server./i
    );
    expect(errorMessage).toBeInTheDocument();

    //Check if clicking the widget retries to connect to server
    act(() => {
      userEvent.click(retryButton);
    });
    const loadingMessage = screen.getByText(/loading app.../i);
    expect(loadingMessage).toBeInTheDocument();
  });
});
