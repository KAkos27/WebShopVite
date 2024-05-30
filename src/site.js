import init from "./init.js";
import clickBasketButton from "./clickBaskeButton.js";
import searchFromCards from "./searchFromCards.js";
import initBasket from "./initBasket.js";
import getToys from "../data/getToys.js";
import addItem from "./admin/addItem.js";
import setFixItems from "../data/setFixItems.js";

const site = () => {
  setFixItems();

  const toys = getToys();
  init(toys);
  initBasket();
  clickBasketButton();
  searchFromCards(toys);
  addItem();
};

export default site;
