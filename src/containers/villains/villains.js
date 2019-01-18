import React, { Component } from "react";
import HeroCardList from "../../components/Hero-Cards/Hero-Card-List/Hero-Card-List.js";

class Villains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroList: [
        {
          name: "Hulk",
          id: 1,
          description: "3 meter tall green beast"
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      heroList: [
        {
          name: "Loki",
          id: 1,
          description:
            "Loki is an odd character. He lives among the Gods in Asgard. He’s known for his tricks, deception and treachery."
        },
        {
          name: "Ultron",
          id: 2,
          description:
            "Ultron is system with all information from the internet and an army of self produced droids."
        },
        {
          name: "Thanos",
          id: 3,
          description:
            "Thanos is the leader of the Titan army and the strongest character in marvel universe till now"
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

export default Villains;
