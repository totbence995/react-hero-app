import React from "react";

const heroCard = props => {
  const style = {
    backgroundColor: "grey",
    borderRadius: 5,
    border: 1
  };
  return (
    <div style={style}>
      <h1>{props.hero.name}</h1>
      <p>id: {props.hero.id}</p>
      <p>{props.hero.description}</p>
    </div>
  );
};

export default heroCard;
