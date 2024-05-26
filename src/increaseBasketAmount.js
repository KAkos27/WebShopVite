import initBasket from "./initBasket.js";

const increaseAmount = (index) => {
  const currentItem = JSON.parse(localStorage.getItem(index));
  currentItem.amount++;
  localStorage.removeItem(index);
  localStorage.setItem(index, JSON.stringify(currentItem));
};

const increaseBasketAmount = () => {
  const addButton = $(".add-button");
  addButton.on("click", (event) => {
    let index = event.target.id;
    index = index.toString();
    index = index.replace("a", "");
    index = parseInt(index);
    increaseAmount(index);
    initBasket();
  });
};

export default increaseBasketAmount;
