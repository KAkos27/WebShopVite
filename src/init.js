import addToBasket from "./addToBasket.js";
import createCards from "./createCards.js";
import orderCards from "./orderCards.js";

const init = (toys) => {
  createCards(toys);
  orderCards(toys);
  addToBasket();
};

export default init;
