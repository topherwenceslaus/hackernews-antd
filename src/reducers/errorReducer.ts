import { ErrorType } from "../types/types";
import {
  AppActions,
  API_FAILURE,
  FETCH_NEWS,
  FRONT_PAGE,
  SEARCH_NEWS
} from "../types/actionTypes";

const initialState: ErrorType = {
  errorMessage: "",
  isError: false
};

const errorReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case API_FAILURE: {
      return { ...state, errorMessage: action.errorMessage, isError: true };
    }
    case FETCH_NEWS:
    case FRONT_PAGE:
    case SEARCH_NEWS: {
      return { ...state, ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default errorReducer;
