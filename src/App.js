import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import "./style.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
    </div>
  );
};

export default App;
