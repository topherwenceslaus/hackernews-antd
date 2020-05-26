import React, { useContext } from "react";
import { NewsContext } from "../AppState";
import News from "./News";
import Loading from "./Loading";
import AlertBox from "./Alert";

const NewsPane = () => {
  const {
    state: { news, loading, isError, errorMessage }
  } = useContext(NewsContext);

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return <AlertBox errroMessage={errorMessage} />;
  }

  return <News news={news} />;
};

export default NewsPane;
