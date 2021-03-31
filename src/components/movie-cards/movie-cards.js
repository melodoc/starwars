import React from "react";
import "./movie-cards.css";

import SectionHeader from "./../section-header/section-header";
import Card from "./../card/card";
import Controls from "./../controls/controls";

function MovieCards() {
  return (
    <>
      <SectionHeader />
      <article className="slider-card">
        <Card />
        <Card />
        <Card />
      </article>
      <Controls />
    </>
  );
}

export default MovieCards;
