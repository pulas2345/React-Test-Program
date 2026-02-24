import React, { useState } from "react";
import Pictures from "./Pictures";
import SocialProfiles from "./SocialProfiles";
import ReactLogo from "../assets/react_logo.png";
import { Button, Divider, Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Title from "./Title";
import Header from "./Header";
import { motion } from "framer-motion";
import { Component } from "react";

class DisplayBio extends Component {
  state = {
    displayBio: false,
    opacity1: 1,
    opacity2: 0,
  };

  render() {
    return (
      <div>
        {this.state.displayBio ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: this.state.opacity2,
              transition: { delay: 1, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
          >
            <p>This app has lots of great features!</p>
            <p>Try the features out!</p>
            <p>Nice to meet you.</p>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                this.setState({ opacity2: 0 })
                setTimeout(() => {
                  this.setState({ displayBio: false, opacity1: 1 });
                }, 2000);
              }}
              style={{ color: "white" }}
            >
              Show Less
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: this.state.opacity1,
              scale: this.state.opacity1,
              transition: { delay: 1, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
          >
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                this.setState({ opacity1: 0 })
                setTimeout(() => {
                  this.setState({ displayBio: true, opacity2: 1 });
                }, 2000);
                
              }}
              style={{ color: "white" }}
            >
              Show More
            </Button>
          </motion.div>
        )}
      </div>
    );
  }
}

export default DisplayBio;
