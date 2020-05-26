import React, { FC, ReactElement } from "react";

import { initialState, newsReducer } from "./reducers/newsReducer";
import { Front_Page_Endpoint } from "./constants";
import {
  FRONT_PAGE,
  API_FAILURE,
  FETCH_NEWS,
  AppActions
} from "./types/actionTypes";

export const NewsContext = React.createContext({
  state: initialState,
  dispatch: (action: AppActions) => {}
});

type Iprops = {
  children: ReactElement;
};

const AppState: FC<Iprops> = ({ children }) => {
  const [state, dispatch] = React.useReducer(newsReducer, initialState);

  React.useEffect(() => {
    try {
      const fetchFrontPageNews = async () => {
        dispatch({
          type: FETCH_NEWS
        });

        const news = await fetch(Front_Page_Endpoint)
          .then(data => data.json())
          .then(data => data.hits)
          .catch(e => {
            dispatch({
              type: API_FAILURE,
              errorMessage: e.message || "Something went wrong"
            });
          });

        if (news) {
          dispatch({
            type: FRONT_PAGE,
            news: news
          });
        }
      };

      fetchFrontPageNews();
    } catch (e) {
      dispatch({
        type: API_FAILURE,
        errorMessage: e.message || "Something went wrong"
      });
    }
  }, []);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default AppState;
