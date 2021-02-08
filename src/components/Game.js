import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

const Game = (props) => {
  const [clickedArray, setClickedArray] = useState([]);
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
      "tylee",
      "toph",
      "appa",
    ];
    array.sort(() => Math.random() - 0.5);
    console.log(array);
    setCards(array);
  };

  const clickEvent = (image) => {
    if (!clickedArray.includes(image)) {
      shuffleCards();
      let newArray = [...clickedArray, image];
      setClickedArray(newArray);
      props.updateScore(1);
    } else {
      shuffleCards();
      setClickedArray([]);
      props.updateScore(0);
    }
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
    "tylee",
    "toph",
    "appa",
  ]);

  return (
    <div id="game">
      <div id="gamebackground"></div>
      <div id="cardwrapper">
        {cards.map((card) => {
          let element;
          if (card === "aang" || card === "appa") {
            element = "air";
          } else if (card === "katara" || card === "sokka") {
            element = "water";
          } else if (card === "suki" || card === "toph") {
            element = "earth";
          } else {
            element = "fire";
          }
          return (
            <Card
              element={element}
              key={uniqid()}
              click={clickEvent}
              image={card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Game;
