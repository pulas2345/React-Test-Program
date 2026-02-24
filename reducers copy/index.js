import { combineReducers } from "redux";
import cart from "./cart_reducer";
import shopItems from "./shopItems_reducer";
import recipes from "./recipes_reducer";
import favoriteRecipes from "./favorite_recipes_reducer";
import memes from "./memes_reducer(old)";
import myMemes from "./my_memes_reducer"

const rootReducer = combineReducers({
  shopItems,
  cart,
  recipes,
  favoriteRecipes,
  memes,
  myMemes,
});

export default rootReducer;
