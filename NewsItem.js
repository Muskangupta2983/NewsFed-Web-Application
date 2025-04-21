import React from "react";
import moment from "moment";

export default function NewsItem(props) {
  return (
    <div className="col">
      <div className={`card text-${props.dark==="dark"?"white":"dark"} bg-${props.dark}`}>
        <img src={props.imgUrl?`${props.imgUrl}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcSRvloieXH0vLx1LbWeLCuEiqP6I2TzZzA&usqp=CAU"} className="card-img-top" alt="..." />
        <div className="card-body text-center">
        <span className="badge bg-success my-2">{props.author}</span>
          <h5 className="card-title">{(props.title!=null && props.title.length>67)?`${props.title.slice(0,67)}...`:props.title}</h5>
          <p className="card-text"><small>Published At: {moment(props.publishedAt).utc().format('YYYY-MM-DD, HH:MM:SS')}</small></p>
          <a href={`${props.newsUrl}`} className="btn btn-primary text-center" target="_blank">
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}
