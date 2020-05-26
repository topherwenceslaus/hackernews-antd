import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { NewsContext } from "../AppState";
import App from "../components/App";
import { act } from "react-dom/test-utils";
const renderWithContext = component => {
  return {
    ...render(
      <NewsContext.Provider value={{ state: { news: [], loading: true } }}>
        {component}
      </NewsContext.Provider>
    )
  };
};

describe("App Ccomponent", () => {
  afterEach(cleanup);
  test("should have values from context", () => {
    act(() => {});
    const { getAllByTestId } = renderWithContext(<App />);
  });
});
