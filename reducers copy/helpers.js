import shopItems_json from "../data/shopItems.json";

export function createShopItem(id) {
  let shopItem = shopItems_json.find((c) => c.id === id);
  return shopItem;
}
