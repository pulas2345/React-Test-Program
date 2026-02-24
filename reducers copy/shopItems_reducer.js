import { ADD_SHOPITEM, REMOVE_SHOPITEM } from "../actions";
import shopItems_json from "../data/shopItems.json";
import { createShopItem } from "./helpers";

function shopItems(state = shopItems_json, action) {
  switch (action.type) {
    case ADD_SHOPITEM:
      let shopItems = state.filter((item) => item.id !== action.id);
      return shopItems;
    case REMOVE_SHOPITEM:
      shopItems = [...state, createShopItem(action.id)];
      return shopItems;
    default:
      return state;
  }
}

export default shopItems;
