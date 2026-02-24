import React, { Component } from "react";

const TITLES = [
  "This is an animated title.",
  "Title changed again.",
  "Title still changing.",
  "Hello World!",
  "HELLO WORLD!!!!",
  "yes this is going to loop again.",
  "lets go back to the beginning!",
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentWillUnmount() {
    clearInterval(this.titleInterval);

    clearTimeout(this.timeout)
  }

  componentDidMount() {
    this.setTimeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>{title}</p>
    );
  }
}

export default Title;
