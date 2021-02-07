import React, { useState } from "react";
import Card from "./Card";

const Game = (props) => {
  const [images, setImages] = useState([
    "aang",
    "katara",
    "sokka",
    "zuko",
    "suki",
    "azula",
    "iroh",
    "ozai",
    "mai",
    "taili",
    "toph",
    "appa",
  ]);

  const shuffleImages = () => {
    setImages(images.sort(() => Math.random() - 0.5));
  };

  return (
    <div id="game">
      <Card click={shuffleImages} image={images[0]} />
    </div>
  );
};

export default Game;

// sort(() => Math.random() - 0.5)
