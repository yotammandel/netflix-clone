import './Carusel.css';
import { useEffect, useState } from "react"
import axios from "axios"


export default function Carusel() {
  let [data, setData] = useState([]);

  let getData = async function () {
    let require = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2&api_key=${process.env.API_KEY}`
    );
    console.log(require.data.results);
    setData(require.data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        > 
          <div className="carousel-inner">
            {data.slice(0, 3).map((item, i) => {
              return (
                <div
                  className="carousel-item active"
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
                      paddingBottom:'80px',
                    }}
                  >
                    <h1 class='ItemTitle'>
                      {item.original_title}
                    </h1>
                    <span>
                    <button type="button" class="btn btn-outline-secondary">play</button>
                    <button type="button" class="btn btn-outline-secondary">more info</button>
                    </span>
                    <div class='overview'>
                    <p>{item.overview}</p>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
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
    </>
  );
}
