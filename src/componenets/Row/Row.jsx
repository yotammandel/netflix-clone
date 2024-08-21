import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import Popup from "../Popup/Popup";

export default function Row({ url, title, height }) {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}${apiKey}`);
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [url, apiKey]);

  const openPopup = (movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div >
      <h1 className="title">{title}</h1>
      <div className="Row" style={{ height }}>
        {data.map((item) => (
          <img
            className="RowImg"
            key={item.id}
            alt={item.title || "Movie Poster"}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            onClick={() => openPopup(item)}
          />
        ))}
      </div>

      {selectedMovie && (
        <Popup
          trigger={true}
          closePopup={closePopup}
          movieData={selectedMovie}
        />
      )}
    </div>
  );
}
