import React from "react";

const Card = (props) => {
  return (
    <div id="card">
      <img id={props.image} alt="card" />
      <p>{props.image}</p>
      <button
        onClick={() => {
          props.click(props.image);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Card;
