import init from "./init.js";
import clickBasketButton from "./clickBaskeButton.js";
import searchFromCards from "./searchFromCards.js";
import initBasket from "./initBasket.js";
import toys from "../data/toys.json" with { type: "json" };

const site = () => {
  init(toys.toys);
  initBasket();
  clickBasketButton();
  searchFromCards(toys.toys);
};

export default site;
