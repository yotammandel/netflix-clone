import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Carusel.css";

export default function Carousel() {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageNumber = 2;
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=${apiKey}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
       
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [url]);

  return (
    <div >
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.slice(0, 3).map((item, i) => (
            <div
              key={item.id}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              data-bs-interval="10000"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "600px",
                  width: "100vw",
                  color: "white",
                  justifyContent: "end",
                  paddingBottom: "80px",
                }}
              >
                <h1 className="ItemTitle">{item.original_title}</h1>
                <span>
                  <button type="button" className="btn btn-outline-secondary">
                    play
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    more info
                  </button>
                </span>
                <div className="overview">
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
