import React from "react";
import { NavLink } from "react-router-dom";

const navigationItem = props => (
  <span
    style={{
      width: 30,
      border: 2,
      borderRadius: 5,
      backgroundColor: "#aaa",
      color: "white",
      padding: 10,
      margin: 10
    }}
  >
    <NavLink to={props.link}> {props.name} </NavLink>
  </span>
);

export default navigationItem;
