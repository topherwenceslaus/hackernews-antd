import { LoadingStateType } from "../types/types";
import {
  AppActions,
  FETCH_NEWS,
  FRONT_PAGE,
  API_FAILURE,
  SEARCH_NEWS
} from "../types/actionTypes";

const initialState: LoadingStateType = {
  loading: false
};

const loadingReducers = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case FETCH_NEWS: {
      return { ...state, loading: true };
    }
    case FRONT_PAGE:
    case API_FAILURE:
    case SEARCH_NEWS: {
      return {
        ...state,
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};

export default loadingReducers;
