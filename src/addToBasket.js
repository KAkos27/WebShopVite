import initBasket from "./initBasket.js";

const addToBasketList = (id, toys) => {
  let index = 0;

  toys.forEach((toy, i) => {
    if (toy.id == id) {
      index = i;
    }
  });

  const product = {
    name: toys[index].name,
    price: toys[index].price,
    amount: toys[index].amount,
  };

  let match = false;
  Object.keys(sessionStorage).forEach((item) => {
    const currentItem = JSON.parse(sessionStorage.getItem(item));
    if (currentItem.name === product.name) {
      match = true;
    }
  });

  if (match) {
    const item = JSON.parse(sessionStorage.getItem(id));
    item.amount++;
    sessionStorage.removeItem(id);
    sessionStorage.setItem(id, JSON.stringify(item));
  } else {
    sessionStorage.setItem(id, JSON.stringify(product));
  }
  match = 0;
};

const addToBasket = (toys) => {
  const addButton = $(".card__add-button");
  addButton.on("click", (event) => {
    addToBasketList(event.target.id, toys);
    initBasket();
  });
};

export default addToBasket;
