import { Card, Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import React, { Component } from "react";
import { connect } from "react-redux";
import { favoriteRecipe, removeFavoriteRecipe, cookieRecipe } from "../actions";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import { motion } from "framer-motion";

class RecipeItem extends Component {
  state = {
    isFavorite: false,
  };

  render() {
    let { recipe } = this.props;

    return (
      <Card
        elevation={3}
        style={{
          marginBottom: 10,
          marginTop: 10,
          textAlign: "left",
          paddingLeft: 30,
          paddingBottom: 20,
          paddingTop: 10,
        }}
      >
        <Grid container>
          <Grid item sm={2} xs={12}>
            <img
              src={recipe.thumbnail}
              alt="No "
              style={{
                height: 100,
                marginTop: 15,
                borderColor: "#00ccff",
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 10,
                backgroundColor: "#00ccff",
              }}
            />
          </Grid>
          <Grid item sm={9} xs={12}>
            <a href={recipe.href} target="_blank">
              <h4>{recipe.title}</h4>
            </a>
            <p>{recipe.ingredients}</p>
          </Grid>
          <Grid
            item
            sm={1}
            xs={12}
            style={{ textAlign: "right", color: "#00ccff", paddingRight: 10 }}
          >
            {this.props.favoriteButton ? (
              this.state.isFavorite ? (
                <StarIcon />
              ) : (
                <StarBorderIcon
                  onClick={() => {
                    this.setState({ isFavorite: true });
                    this.props.favoriteRecipe(recipe);
                    let oldHref = read_cookie("RecipeHref");
                    bake_cookie("RecipeHref", `${recipe.href} ${oldHref}`);
                    let oldTitle = read_cookie("RecipeTitle");
                    bake_cookie("RecipeTitle", `${recipe.title}@${oldTitle}`);
                    console.log(
                      "Recipe History Saved!",
                      read_cookie("RecipeHref")
                    );
                  }}
                />
              )
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes,
    cookieRecipes: state.cookieRecipes,
  };
}

export default connect(mapStateToProps, {
  favoriteRecipe,
  removeFavoriteRecipe,
  cookieRecipe,
})(RecipeItem);
