import { initialNewsState } from "../types/types";
import {
  FRONT_PAGE,
  SEARCH_NEWS,
  API_FAILURE,
  FETCH_NEWS,
  AppActions
} from "../types/actionTypes";

export const initialState: initialNewsState = {
  news: [],
  loading: false,
  isError: false,
  errorMessage: ""
};

export const newsReducer = (state = initialState, action: AppActions) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_NEWS: {
      return {
        ...state,
        loading: true
      };
    }
    case FRONT_PAGE: {
      return {
        ...state,
        news: action.news,
        loading: false,
        isError: false,
        errorMessage: ""
      };
    }
    case SEARCH_NEWS: {
      return {
        ...state,
        news: action.news,
        loading: false,
        isError: false,
        errorMessage: ""
      };
    }

    case API_FAILURE: {
      return {
        ...state,
        loading: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    }
    default: {
      return state;
    }
  }
};
