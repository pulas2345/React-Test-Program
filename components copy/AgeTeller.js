import { TextField, Button, Container } from "@material-ui/core";
import React, { Component } from "react";
import Header from "./Header";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AgeStats from "./AgeStats";
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

class AgeTeller extends Component {
  state = { newDate: "", birthday: "2017-05-24", showStats: false };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1>Age Teller</h1>
          <h3 style={{ marginBottom: 30 }}>Input Your Birthday!</h3>
          <form noValidate>
            <TextField
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              onChange={(event) =>
                this.setState({ newDate: event.target.value })
              }
            />
            <Button
              style={{ marginLeft: 30, marginTop: 5 }}
              variant="contained"
              color="primary"
              size="large"
              onClick={() =>
                this.setState({
                  birthday: this.state.newDate,
                  showStats: true,
                })
              }
            >
              Submit
            </Button>
          </form>
          {this.state.showStats ? (
            <div className="ageStats">
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      </ThemeProvider>
    );
  }
}

export default AgeTeller;
