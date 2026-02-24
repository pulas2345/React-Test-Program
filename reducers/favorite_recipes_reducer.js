import { FAVORITE_RECIPE } from "../actions";

function favoriteRecipes(state = [], action) {
  switch (action.type) {
    case FAVORITE_RECIPE:
      state = [...state, action.recipe];
      return state;
    default:
      return state;
  }
}

export default favoriteRecipes;
