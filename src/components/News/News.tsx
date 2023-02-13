"use client";

import NewsItem from "@/components/News/NewsItem";
import Image from "next/image";
import { useState } from "react";
import { SERVER_URL } from "@/constants/const";
import { INews } from "@/types/news.type";

interface NewsProps {
  news: INews[];
}

export default function News(props: NewsProps) {
  const [news, setNews] = useState(props.news);
  const [offset, setOffset] = useState(4);

  const handleGetMoreNews = () => {
    fetch(`${SERVER_URL}/posts/news?offset=${offset}`)
      .then((response) => response.json())
      .then((response) => {
        setNews([...news, ...response]);
        setOffset((prevState) => prevState + 4);
      });
  };

  return (
    <div className="news">
      {news.map((news: INews) => (
        <NewsItem news={news} key={news.id} />
      ))}
      <div className="news_more" onClick={handleGetMoreNews}>
        <div className="news_more_text">Показать еще</div>
        <div className="news_more_arrow">
          <Image
            src={"/more.svg"}
            alt={"show more"}
            width={"20"}
            height={"20"}
          />
        </div>
      </div>
    </div>
  );
}
