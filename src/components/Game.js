import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

const Game = (props) => {
  const shuffleCards = () => {
    let array = [
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
    ];
    array.sort(() => Math.random() - 0.5);
    console.log(array);
    setCards(array);
  };

  const [cards, setCards] = useState([
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

  return (
    <div id="game">
      {cards.map((card) => {
        return <Card key={uniqid()} click={shuffleCards} image={card} />;
      })}
    </div>
  );
};

export default Game;
