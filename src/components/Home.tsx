import * as React from "react";

import NewsPane from "../components/NewsPane";
import { NewsContext } from "../AppState";
import { SEARCH_NEWS, API_FAILURE, FETCH_NEWS } from "../types/actionTypes";
import { Search_String_Endpoint } from "../constants";

/** ANTD */

import { Layout } from "antd";
import { Input, Button } from "antd";
import { fetchData } from "../utils";
const { Content } = Layout;

export default function App() {
  const [searchStr, setSearchStr] = React.useState("");
  const { dispatch } = React.useContext(NewsContext);

  const onSerach = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchStr(e.currentTarget.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchStr("");
    try {
      dispatch({
        type: FETCH_NEWS
      });

      const news = await fetchData(Search_String_Endpoint + searchStr);

      dispatch({
        type: SEARCH_NEWS,
        news: news.hits
      });
    } catch (e) {
      dispatch({
        type: API_FAILURE,
        errorMessage: e.message || "something went wrong"
      });
    }
  };

  return (
    <Content style={{ padding: "0 50px", backgroundColor: "white" }}>
      <div className="site-layout-content">
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            value={searchStr}
            onChange={onSerach}
            placeholder="Search"
            style={{ width: "80%" }}
          />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </form>

        <NewsPane />
      </div>
    </Content>
  );
}
