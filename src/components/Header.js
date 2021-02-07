import React from "react";
import Scoreboard from "./Scoreboard.js";

const Header = (props) => {
  return (
    <header>
      <div id="background-image"></div>
      <h1 id="title">Memory Card</h1>
      <Scoreboard
        currentScore={props.currentScore}
        highScore={props.highScore}
      />
    </header>
  );
};

export default Header;
