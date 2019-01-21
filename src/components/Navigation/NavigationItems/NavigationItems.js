import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  const navigationItems = props.navItems.map(navItem => (
    <NavigationItem name={navItem.name} link={navItem.link} />
  ));
  return (
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
      {navigationItems}
    </ul>
  );
};

export default navigationItems;
