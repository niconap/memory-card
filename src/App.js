import React, { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./style.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScore = (number) => {
    if (number === 0) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
    } else if (number === 1) {
      setCurrentScore(currentScore + 1);
    }
  };

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
      <Game
        updateScore={updateScore}
        currentScore={currentScore}
        highScore={highScore}
      />
      <footer>
        <p>
          Made by: <a href="https://github.com/niconap">Nico Nap</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
