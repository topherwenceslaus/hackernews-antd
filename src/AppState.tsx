import React, { FC, ReactElement, useEffect } from "react";

import rootReducer from "./reducers/";
import { initialState } from "./reducers/newsReducer";
import {
  FRONT_PAGE,
  API_FAILURE,
  FETCH_NEWS,
  AppActions
} from "./types/actionTypes";

import { useFetch } from "./hooks";

export const NewsContext = React.createContext({
  state: initialState,
  dispatch: (action: AppActions) => {}
});

type Iprops = {
  children: ReactElement;
};

const AppState: FC<Iprops> = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
  const { news, error } = useFetch();

  useEffect(() => {
    dispatch({
      type: FETCH_NEWS
    });

    if (news.length > 0) {
      dispatch({
        type: FRONT_PAGE,
        news: news
      });
    }

    if (error) {
      dispatch({
        type: API_FAILURE,
        errorMessage: "Something went wrong"
      });
    }
  }, [news, error]);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default AppState;
