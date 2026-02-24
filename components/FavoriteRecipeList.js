import { Button, Container, Card } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bake_cookie, delete_cookie, read_cookie } from "sfcookies";
import Header from "./Header";
import RecipeItem from "./RecipeItem";
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

class FavoriteRecipeList extends Component {
  state = {
    hrefCookie: read_cookie("RecipeHref").split(" "),
    titleCookie: read_cookie("RecipeTitle").split("@"),
  };

  render() {
    let { hrefCookie, titleCookie } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container style={{ padding: 30 }}>
          <h1>Recipe Finder</h1>
          <Link to="/recipe-finder">
            <Button>Go To Search Recipes</Button>
          </Link>
          <div>
            {this.props.favoriteRecipes.map((recipe, index) => {
              return (
                <RecipeItem
                  key={index}
                  recipe={recipe}
                  favoriteButton={false}
                />
              );
            })}
          </div>
          <Card elevation={3} style={{ paddingBottom: 30, marginTop: 20 }}>
            <div>
              <h3 style={{ marginBottom: 20 }}>Previous Favorites</h3>
            </div>
            {hrefCookie.map((href, index) => {
              return (
                <div style={{ marginBottom: 10 }}>
                  <a href={href}>
                    <h4>{titleCookie[index]}</h4>
                  </a>
                </div>
              );
            })}
            <div style={{ marginTop: 20 }}>
              <Button
                onClick={() => {
                  delete_cookie("RecipeHref");
                  delete_cookie("RecipeTitle");
                }}
              >
                Clear History
              </Button>
            </div>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes,
  };
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
