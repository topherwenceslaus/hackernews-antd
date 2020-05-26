import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import AppState, { NewsContext } from "../AppState";
import App from "../components/App";

const newsObj = {
  title: "test",
  author: "test",
  story_text: "test",
  url: "test",
  points: 22
};

describe("App State", () => {
  test("Should set state with news obj", async () => {
    const fakeResponse = {
      hits: [newsObj]
    };

    jest.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => fakeResponse
      });
    });

    const app = render(<AppState />);

    const screen1 = await screen.findByText("test");
    expect(screen1).toHaveTextContent(/test/i);
  });
});
