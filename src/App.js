import React from "react";
import axios from "axios";
import { useState } from "react";

const FetchApi = () => {
  const [News,setNews]=useState([])
  
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=613af10739a445479163ce1163b68f38"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
      .catch((error)=>{
        console.log(error)
      })
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary btn-sm my-3" onClick={fetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            News.map((value)=>{
              return (
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="/" className="btn btn-primary">{value.url}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

    </>
  );
};

export default FetchApi;
