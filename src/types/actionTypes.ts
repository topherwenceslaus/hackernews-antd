import { NewsType } from "./types";

export const FRONT_PAGE = "FRONT_PAGE";
export const SEARCH_NEWS = "SEARCH_NEWS";
export const API_FAILURE = "API_FAILURE";
export const FETCH_NEWS = "FETCH_NEWS";

export interface FrontPage {
  type: typeof FRONT_PAGE;
  news: NewsType[];
}

export interface SearchString {
  type: typeof SEARCH_NEWS;
  news: NewsType[];
}

export interface APIFailure {
  type: typeof API_FAILURE;
  errorMessage: string;
}

export interface FetchNews {
  type: typeof FETCH_NEWS;
}
export type AppActions = FrontPage | SearchString | APIFailure | FetchNews;
