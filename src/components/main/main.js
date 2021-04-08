import React from "react";
import "./main.css";

import Header from "../header/header";
import MovieInfo from "../movie-info/movie-info";
import MovieCards from "../movie-cards/movie-cards";

function Main() {
  return (
    <div className="container">
      <Header />
      <MovieInfo />
      <MovieCards />
    </div>
  );
}

export default Main;
