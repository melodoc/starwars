import React from "react";
import "./main.css";

import Header from "../header/header";
import MovieInfo from "../movie-info/movie-info";
import MovieDate from "../movie-date/movie-date";
import Trailer from "../trailer/trailer";
import MovieCards from "../movie-cards/movie-cards";

function Main() {
  return (
    <div className="container">
      <Header />
      <main>
        <MovieInfo />
        <MovieDate />
        <Trailer />
        <MovieCards />
      </main>
    </div>
  );
}

export default Main;
