import {
  Container,
  GridList,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";
import Header from "./Header";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MemeItem from "./MemeItem";
import { Link } from "react-router-dom";
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

class MemeGenerator extends Component {
  state = {
    memes: [],
    memeLimit: 10,
    text0: "",
    text1: "",
    fade: 1,
  };

  searchMemes = () => {
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ memes: json.data.memes });
        console.log(this.state.memes);
      });
  };

  componentDidMount() {
    this.searchMemes();
  }

  render() {
    return (
      <Container style={{ padding: 30, color: "white" }}>
        <ThemeProvider theme={theme}>
          <h1 style={{ color: "white" }}>Meme Generator</h1>
          <Link to="/my-memes">
            <Button>Go To Memes</Button>
          </Link>
          <Grid container style={{ marginBottom: 50 }}>
            <Grid item xs={12}>
              <h4 style={{ color: "white" }}>Write some text!</h4>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormGroup style={{ margin: 10 }}>
                <FormControl variant="outlined">
                  <TextField
                    size="small"
                    variant="filled"
                    color="secondary"
                    label="Top"
                    onChange={(event) =>
                      this.setState({ text0: event.target.value })
                    }
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormGroup style={{ margin: 10 }}>
                <FormControl variant="outlined">
                  <TextField
                    size="small"
                    variant="filled"
                    color="secondary"
                    label="Bottom"
                    onChange={(event) =>
                      this.setState({ text1: event.target.value })
                    }
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            {this.state.memes
              .slice(0, this.state.memeLimit)
              .map((meme, index) => {
                return (
                  <Grid item style={{ marginBottom: 40, margin: "0 auto" }}>
                    <MemeItem
                      meme={meme}
                      text0={this.state.text0}
                      text1={this.state.text1}
                    />
                  </Grid>
                );
              })}
          </Grid>

          <Button
            variant="contained"
            onClick={() => {
              this.setState({ fade: 0 });
              setTimeout(() => {
                this.setState({
                  memeLimit: this.state.memeLimit + 10,
                  fade: 1,
                });
              }, 1500);
            }}
          >
            Show More
          </Button>
        </ThemeProvider>
      </Container>
    );
  }
}

/*class MemeText extends Component {
  render() {
    return (
      <Grid container style={{ marginBottom: 50 }}>
        <Grid item xs={12}>
          <h4 style={{ color: "white" }}>Write some text!</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormGroup style={{ margin: 10 }}>
            <FormControl variant="outlined">
              <TextField
                size="small"
                variant="filled"
                color="secondary"
                label="Top"
                onClick={(event) =>
                  this.setState({ text0: event.target.value })
                }
              />
            </FormControl>
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormGroup style={{ margin: 10 }}>
            <FormControl variant="outlined">
              <TextField
                size="small"
                variant="filled"
                color="secondary"
                label="Bottom"
                onClick={(event) =>
                  this.setState({ text1: event.target.value })
                }
              />
            </FormControl>
          </FormGroup>
        </Grid>
      </Grid>
    );
  }
}*/

export default MemeGenerator;
