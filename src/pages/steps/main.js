import React from "react";
import "./main.css";

import { Header } from "../../components/header/header";
import { MovieInfo } from "../../components/movie-info/movie-info";
import { MovieCards } from "../../components/movie-cards/movie-cards";

export const Main = () => {
  return (
    <div className="container">
      <Header />
      <MovieInfo />
      <MovieCards />
    </div>
  );
};
