import { username, password } from "../data/secrets";

export const ADD_SHOPITEM = "ADD_SHOPITEM";
export const REMOVE_SHOPITEM = "REMOVE_SHOPITEM";
export const SET_RECIPES = "SET_RECIPES";
export const FAVORITE_RECIPE = "FAVORITE_RECIPE";
export const REMOVE_FAVORITE_RECIPE = "FAVORITE_RECIPE";
export const COOKIE_RECIPE = "COOKIE_RECIPE";
export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const SET_DRAWER = "SET_DRAWER";
export const NEW_MEME = "NEW_MEME";

export function addShopItemById(id) {
  const action = {
    type: ADD_SHOPITEM,
    id,
  };
  return action;
}

export function removeShopItemById(id) {
  const action = {
    type: REMOVE_SHOPITEM,
    id,
  };
  return action;
}

export function setRecipes(items) {
  const action = {
    type: SET_RECIPES,
    items,
  };
  return action;
}

export function favoriteRecipe(recipe) {
  const action = {
    type: FAVORITE_RECIPE,
    recipe,
  };
  return action;
}

export function removeFavoriteRecipe(recipe) {
  const action = {
    type: REMOVE_FAVORITE_RECIPE,
    recipe,
  };
  return action;
}

function receiveMemes(json) {
  const { memes } = json.data.memes;

  const action = {
    type: RECEIVE_MEMES,
    memes,
  };
  return action;
}

function fetchMemesJson() {
  return fetch("https://api.imgflip.com/get_memes", {
    method: "GET",
  }).then((response) => response.json());
}

export function fetchMemes() {
  return function (dispatch) {
    return fetchMemesJson().then(dispatch(receiveMemes(json)));
  };
}

export function newMeme(meme) {
  const action = {
    type: NEW_MEME,
    meme,
  };
  return action;
}

function postMemeJson(params) {
  const bodyParams = Object.keys(params)
    .map((key) => {
      return key + "=" + params[key];
    })
    .join("&");
  console.log(bodyParams);
  return fetch(`https://api.imgflip.com/caption_image?${bodyParams}`).then(
    (response) => response.json()
  );
}

export function createMeme(new_meme_object) {
  return function (dispatch) {
    return postMemeJson(new_meme_object).then((new_meme) =>
      dispatch(newMeme(new_meme))
    );
  };
}
