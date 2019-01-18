import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul
    style={{
      height: 30,
      border: 2,
      backgroundColor: "#aaa",
      color: "white",
      padding: 10,
      margin: 10
    }}
  >
    <NavigationItem name="Heroes" link="Heroes" />
    <NavigationItem name="Villains" link="Villains" />
    <NavigationItem name="Discussions" link="Discussions" />
    <NavigationItem name="History" link="History" />
  </ul>
);

export default navigationItems;
