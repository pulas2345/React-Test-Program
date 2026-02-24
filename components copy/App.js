import React, { useState, Component } from "react";
import Pictures from "./Pictures";
import SocialProfiles from "./SocialProfiles";
import ReactLogo from "../assets/react_logo.png";
import { Button, Divider, Container } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Title from "./Title";
import Header from "./Header";
import { motion } from "framer-motion";

const theme = createTheme({
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

class App extends Component {
  state = {
    displayBio: false,
    opacity1: 1,
    opacity2: 0,
    appOpacity: 1,
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <div style={{ padding: 30 }}>
            <img style={{ width: 200 }} src={ReactLogo}></img>
            <h1>Hello!</h1>
            <Title />
            <p>This is my first React app</p>
            <div>
              {this.state.displayBio ? (
                <div>
                  <p>I think its pretty good</p>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                      this.setState({
                        displayBio: false,
                        opacity1: 1,
                        appOpacity: 1,
                      });
                    }}
                  >
                    Show Less
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                      this.setState({ opacity1: 0, appOpacity: 0 });
                      this.setState({
                        displayBio: true,
                        opacity2: 1,
                        appOpacity: 1,
                      });
                    }}
                  >
                    Show More
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/* <div style={{ padding: 20 }}>{<Pictures></Pictures>}</div> */}

          <div style={{ padding: 20 }}>
            <SocialProfiles></SocialProfiles>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
