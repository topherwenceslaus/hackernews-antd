import React, { FC } from "react";
import NewsItem from "./newsItem";
import { NewsType } from "./types";

type Iprops = {
  news: NewsType[];
};

const News: FC<Iprops> = ({ news }) => {
  return news.map((item, index) => {
    return <NewsItem newsItem={item} key={index} />;
  });
};

export default News;
