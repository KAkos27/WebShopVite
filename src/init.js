import addToBasket from "./addToBasket.js";
import initTable from "./admin/initTable.js";
import createCards from "./createCards.js";
import orderCards from "./orderCards.js";

const init = (toys) => {
  createCards(toys);
  orderCards(toys);
  initTable(toys);
  addToBasket(toys);
};

export default init;
