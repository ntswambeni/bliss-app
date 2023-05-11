import { render, screen, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Loading from "./Loading";
import { defaultTheme } from "../../theme";
import rootReducer from "../../reducers";

describe("Loading screen", () => {
  it("should display a loading message on initial render", () => {
    const store = configureStore({ reducer: rootReducer });
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Loading />
        </ThemeProvider>
      </Provider>
    );
    const message = screen.getByText(/loading app.../i);
    expect(message).toBeInTheDocument();
  });
});
