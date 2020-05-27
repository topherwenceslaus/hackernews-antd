import { FRONT_PAGE, SEARCH_NEWS, AppActions } from "../types/actionTypes";

export const initialState = {
  news: [],
  loading: false,
  isError: false,
  errorMessage: ""
};

const newsReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case FRONT_PAGE: {
      return {
        ...state,
        news: action.news
      };
    }
    case SEARCH_NEWS: {
      return {
        ...state,
        news: action.news
      };
    }

    default: {
      return state;
    }
  }
};

export default newsReducer;
