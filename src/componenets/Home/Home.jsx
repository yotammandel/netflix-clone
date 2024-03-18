import React from 'react'
import Row from '../Row/Row'
import Carusel from '../Carusel/Carusel'

export default function Home() {
  return (
    <>
      <Carusel />
      <Row
        title="NETFLIX ORIGINALS"
        url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key="
        height="350px"
      />
      <Row
        title="Top Rated"
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key="
        height="250px"
      />
      <Row
        title="Movies"
        url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=2&api_key="
        height="250px"
      />
      <Row
        title="Watch again"
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3&api_key="
        height="250px"
      />
      <Row
        title="Continue  watching"
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2&api_key="
        height="250px"
      />
    </>
  )
}
