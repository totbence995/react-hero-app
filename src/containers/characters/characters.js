import React, { Component } from "react";
import HeroCardList from "../../components/Hero-Cards/Hero-Card-List/Hero-Card-List.js";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroList: [
        {
          name: "Hulk",
          id: 1,
          description: "3 meter tall greean beast"
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      heroList: [
        {
          name: "Hulk",
          id: 1,
          description: "3 meter tall green beast"
        },
        {
          name: "Iron man",
          id: 2,
          description: "a genius without any superpower, except his brain"
        },
        {
          name: "Black Widow",
          id: 3,
          description:
            "A gorgeous woman, with extraordinary martial arts skills"
        },
        {
          name: "Hawk",
          id: 4,
          description:
            "A former shield agent, probably the best archer in the world"
        }
      ]
    });
  }

  render() {
    const heroes = this.state.heroList ? (
      <HeroCardList heroList={this.state.heroList} />
    ) : (
      <p>There are no heroes here</p>
    );

    return (
      <div
        style={{
          position: "absolute",
          left: "25%",
          backgroundColor: "green",
          borderRadius: 5,
          margin: 5
        }}
      >
        {heroes}
      </div>
    );
  }
}

export default Characters;
