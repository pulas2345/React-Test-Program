import { Button, Container, Divider } from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./Header";
import { motion } from "framer-motion";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ccff",
    },
    secondary: {
      main: "#ffffff",
    },
    type: "dark",
  },
});

const Joke = ({ joke: { setup, delivery, id } }) => (
  <p key={id} style={{color: "white"}}>
    {setup} <br></br> <b>{delivery}</b>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart"
    )
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }));
  }

  fetchJokes = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart&amount=10"
    )
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json.jokes }));
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <div className="jokes">
            <h1>Here is a Joke!</h1>
            <Joke joke={this.state.joke} />
            <Divider />
            <div className="jokesButton">
              <h2>Want more?</h2>
              <Button
                onClick={this.fetchJokes}
                variant="contained"
                color="primary"
                size="small"
              >
                Bring The Jokes!
              </Button>
              {this.state.jokes.map((joke) => (
                <Joke key={joke.id} joke={joke} />
              ))}
            </div>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Jokes;
