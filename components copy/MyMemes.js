import { Container, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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

class MyMemes extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ padding: 30 }}>
          <Link to="/meme-generator">
            <Button>To Meme Generator</Button>
          </Link>
          {this.props.myMemes.map((meme, index) => {
            return (
              <a key={index} href={meme.data.url} target="_blank">
                <div
                  style={{
                    margin: 20,
                  }}
                >
                  <motion.img
                    src={meme.data.url}
                    alt="meme(very funny lol)"
                    style={{
                      width: "50%",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ y: -10 }}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    myMemes: state.myMemes,
  };
}

export default connect(mapStateToProps, null)(MyMemes);
