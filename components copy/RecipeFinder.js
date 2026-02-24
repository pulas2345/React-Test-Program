import { Button, Container } from "@material-ui/core";
import React, { Component } from "react";
import Header from "./Header";
import SearchRecipes from "./SearchRecipes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import RecipeList from "./RecipeList";
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

class RecipeFinder extends Component {
  render() {
    return (
      <Container style={{ padding: 30 }}>
        <ThemeProvider theme={theme}>
          <SearchRecipes />
          <Link to="/favorite-recipes">
            <Button>Go To Favorite Recipes</Button>
          </Link>
          <RecipeList />
        </ThemeProvider>
      </Container>
    );
  }
}

export default RecipeFinder;
