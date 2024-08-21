import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import Popup from "../Popup/Popup";

export default function Row(props) {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getData = async function () {
    try {
      const response = await axios.get(`${props.url}${process.env.API_KEY}`);
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openPopup = (movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="container" class="fixed-left">
        <h1 className="title">{props.title}</h1>
        <div className="Row" style={{ height: props.height }}>
          {data.map((item, i) => (
            <img
              className="RowImg"
              key={i}
              alt=""
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              onClick={() => openPopup(item)}
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <Popup
          trigger={true}
          closePopup={closePopup}
          movieData={selectedMovie}
        />
      )}
    </>
  );
}
