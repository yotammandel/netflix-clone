import React from "react";
import "./Popup.css";

export default function Popup({ trigger, closePopup, movieData }) {
  return trigger ? (
    <div className="popup">
      <div class="card" >
        <img
          class="card-img-top"
          src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{movieData.title}</h5>
          <p class="card-text">{movieData.overview}</p>
          <button onClick={closePopup} class="btnC btn-danger" >Close</button>
        </div>
      </div>
    </div>
  ) : null;
}
