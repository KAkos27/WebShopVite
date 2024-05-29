import initBasket from "./initBasket.js";
import getToys from "../data/getToys.js";

const toys = getToys();

const addToBasketList = (i) => {
  const product = {
    name: toys[i].name,
    price: toys[i].price,
    amount: toys[i].amount,
  };

  let match = false;
  Object.keys(sessionStorage).forEach((item) => {
    const currentItem = JSON.parse(sessionStorage.getItem(item));
    if (currentItem.name === product.name) {
      match = true;
    }
  });

  if (match) {
    const item = JSON.parse(sessionStorage.getItem(i));
    item.amount++;
    sessionStorage.removeItem(i);
    sessionStorage.setItem(i, JSON.stringify(item));
  } else {
    sessionStorage.setItem(i, JSON.stringify(product));
  }
  match = 0;
};

const addToBasket = () => {
  const addButton = $(".card__add-button");
  addButton.on("click", (event) => {
    addToBasketList(event.target.id);
    initBasket();
  });
};

export default addToBasket;
