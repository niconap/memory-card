import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {
  return (
    <div id="scoreboard">
      Current score: {props.currentScore} <br />
      High score: {props.highScore}
    </div>
  );
};

export default Scoreboard;
