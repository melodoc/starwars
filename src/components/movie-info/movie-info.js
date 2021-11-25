import React from "react";
import { StartDate } from "../start-date/start-date";
import { TrailerButton } from "../trailer-button/trailer-button";
import { MovieDescription } from "../movie-description/movie-description";

export const MovieInfo = () => {
  return (
    <>
      <MovieDescription />
      <StartDate />
      <TrailerButton />
    </>
  );
};
