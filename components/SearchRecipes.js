import {
  Button,
  Card,
  FormControl,
  FormGroup,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setRecipes } from "../actions";
import recipes_json from "../data/recipes.json";

class SearchRecipes extends Component {
  state = {
    ingredients: "",
    dish: "",
  };

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <Card elevation={3} style={{ padding: 10 }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <FormGroup style={{ margin: 10 }}>
                <FormControl variant="outlined">
                  <TextField
                    size="small"
                    color="primary"
                    variant="outlined"
                    label="Ingredients"
                    onChange={(event) =>
                      this.setState({ ingredients: event.target.value })
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
                    color="primary"
                    variant="outlined"
                    label="Dish"
                    onChange={(event) =>
                      this.setState({ dish: event.target.value })
                    }
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 10 }}
                onClick={() => {
                  let recipes = [];
                  let { ingredients, dish } = this.state;
                  if (ingredients === "") {
                    console.log("no ingredients");
                    ingredients = "&%$#%@^$*)%@*($%@*^$%*^@%$*^@*(";
                  }
                  if (dish === "") {
                    console.log("no dish");
                    dish = "^%$@$^)%!*@^%$*%)*^!@$%!^$%*";
                  }
                  recipes_json.forEach((element) => {
                    if (element.ingredients.includes(ingredients)) {
                      console.log("ingredient");
                      recipes.push(element);
                    }
                    if (element.title.includes(dish)) {
                      console.log("dish");
                      recipes.push(element);
                    }
                  });
                  if (recipes.length != 0) {
                    this.props.setRecipes(recipes);
                  } else {
                    console.log("not found")
                    this.props.setRecipes([
                      {
                        title: "Recipes not found",
                        ingredients: "Please try again",
                      },
                    ]);
                  }
                  // const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}&p=1`;

                  // fetch(url, {
                  //   method: "GET",
                  // })
                  //   .then((response) => response.json())
                  //   .then((json) => {
                  //     this.props.setRecipes(json.results);
                  //   });
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
