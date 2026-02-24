import { ADD_SHOPITEM, REMOVE_SHOPITEM } from "../actions";
import { createShopItem } from "./helpers";

function cart(state = [], action) {
  switch (action.type) {
    case ADD_SHOPITEM:
      let cart = [...state, createShopItem(action.id)];
      return cart;
    case REMOVE_SHOPITEM:
      cart = state.filter((item) => item.id !== action.id);
      return cart;
    default:
      return state;
  }
}

export default cart;
