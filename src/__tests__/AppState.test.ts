//@ts-nocheck
import AppState from "../AppState";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

describe("App State", () => {
  test("test app state", () => {
    const fakeResponse = {
      hits: []
    };
    jest.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => fakeResponse
      });
    });
    render(<AppState />);
  });
});
