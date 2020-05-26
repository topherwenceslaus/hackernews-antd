import React, { FC } from "react";
import { NewsType } from "../types/types";
import { Card } from "antd";
type IProps = {
  newsItem: NewsType;
};

const NewsItem: FC<IProps> = ({ newsItem }) => {
  return (
    <Card
      title={newsItem.title}
      extra={
        <a href={newsItem.url} target="blank">
          More
        </a>
      }
      style={{ width: "90%", margin: "1rem" }}
    >
      <p>
        <label style={{ fontWeight: "bold" }}>Author: </label>
        {newsItem.author}
      </p>
      <p>
        <label style={{ fontWeight: "bold" }}>Votes: </label>
        {newsItem.points}
      </p>
      <p style={{ height: "auto", maxHeight: "200px", overflow: "scroll" }}>
        {newsItem.story_text}
      </p>
    </Card>
  );
};

export default NewsItem;
