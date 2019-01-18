import React from "react";
import HeroCard from "../Hero-Card/Hero-Card";

const HeroCardList = props => {
  const heroList = props.heroList.map(hero => (
    <HeroCard key={hero.id} hero={hero} />
  ));
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 200px 200px",
        gap: 20
      }}
    >
      {heroList}
    </div>
  );
};

export default HeroCardList;
