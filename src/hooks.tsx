import React, { useState } from "react";
import { fetchData } from "./utils";
import { Front_Page_Endpoint } from "./constants";

export const useFetch = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    let isLoading = false;
    try {
      const fetchFrontPageNews = async () => {
        const news = await fetchData(Front_Page_Endpoint).catch(e => {
          setError(true);
        });
        if (news) {
          setNews(news.hits);
        }
      };

      if (!isLoading) {
        fetchFrontPageNews();
      }
    } catch (e) {
      setError(true);
    }

    return () => {
      isLoading = true;
    };
  }, []);

  return { news, error };
};
