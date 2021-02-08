import React from "react";

const Card = (props) => {
  return (
    <div
      className={props.element + " card"}
      onClick={() => {
        props.click(props.image);
      }}
    >
      <div id={props.image} className="cardimage"></div>
      <p>{props.image}</p>
    </div>
  );
};

export default Card;
