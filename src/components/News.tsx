import React, { FC } from "react";
import NewsItem from "./newsItem";
import { NewsType } from "../types/types";

type Iprops = {
  news: NewsType[];
};

const News: FC<Iprops> = ({ news }) => {
  const elements = news.map((item, index) => {
    return <NewsItem newsItem={item} key={index} />;
  });
  return <>{elements}</>;
};

export default News;
