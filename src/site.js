import init from "./init.js";
import clickBasketButton from "./clickBaskeButton.js";
import searchFromCards from "./searchFromCards.js";
import initBasket from "./initBasket.js";
import getToys from "../data/getToys.js";
import addItem from "./admin/addItem.js";

const toys = getToys();

const site = () => {
  init(toys);
  initBasket();
  clickBasketButton();
  searchFromCards(toys);
  addItem();
};

export default site;
