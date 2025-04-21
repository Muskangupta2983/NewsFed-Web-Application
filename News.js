import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState(Array.from({ length: 0 }));
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`;
    const loadData = async() =>{
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setPage(page+1);
    }

    loadData();
  };

  useEffect(() => {
    const loadData = async() =>{
      props.setProgress(17);
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      props.setProgress(45);
      let parseData = await data.json();
      props.setProgress(78);
      setArticles(parseData.articles);
      setPage(page+1);
      setTotalResults(parseData.totalResults);
      props.setProgress(100);
    }

    loadData();
  },[]);

  return (
    <div className="container my-4">
      <h1 align="center" style={{visibility: "hidden"}}>TOP HEADLINES</h1>
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner />}
        style={{overflow:"hidden"}}
      >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {articles.map((ele, index) => {
            return (<NewsItem 
              key={index} 
              dark={props.dark} 
              title={ele.title}
              description={ele.description}
              imgUrl={ele.urlToImage}
              newsUrl={ele.url}
              author={ele.author}
              publishedAt={ele.publishedAt}/>);
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general"
}