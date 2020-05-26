import { newsReducer, initialState } from "./newsReducer";
import { NewsType } from "../types/types";

describe("reducers test", () => {
  const newsObj: NewsType = {
    title: "test",
    author: "test",
    story_text: "test",
    url: "test",
    points: 22
  };
  test("should return initial state for no action", () => {
    expect(newsReducer(undefined, { type: "" })).toBe(initialState);
  });

  test("should set loading true", () => {
    const state = newsReducer(undefined, { type: "FETCH_NEWS" });
    expect(state.loading).toBeTruthy();
    expect(state.isError).toBeFalsy();
  });

  test("should set news object", () => {
    const state = newsReducer(undefined, {
      type: "FRONT_PAGE",
      news: [newsObj]
    });
    expect(state.news).toEqual([newsObj]);
    expect(state.isError).toBeFalsy();
    expect(state.loading).toBeFalsy();
  });

  test("should set new obj on search", () => {
    const state = newsReducer(undefined, {
      type: "SEARCH_NEWS",
      news: [newsObj]
    });
    expect(state.news).toEqual([newsObj]);
    expect(state.isError).toBeFalsy();
    expect(state.loading).toBeFalsy();
  });

  test("should set error message", () => {
    const state = newsReducer(undefined, {
      type: "API_FAILURE",
      errorMessage: "test"
    });

    expect(state.errorMessage).toBe("test");
    expect(state.isError).toBeTruthy();
    expect(state.loading).toBeFalsy();
  });
});
