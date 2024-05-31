import addToBasket from "./addToBasket.js";
import initTable from "./admin/initTable.js";
import removeItem from "./admin/removeItem.js";
import createCards from "./createCards.js";
import orderCards from "./orderCards.js";

const init = (toys) => {
  createCards(toys);
  orderCards(toys);
  initTable(toys);
  addToBasket(toys);
  removeItem();
};

export default init;
