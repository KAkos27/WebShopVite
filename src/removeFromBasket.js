import initBasket from "./initBasket.js";

const removeFromArray = (index) => {
  const currentItem = JSON.parse(localStorage.getItem(index));
  const moreThanOne = currentItem.amount > 1;
  if (moreThanOne) {
    currentItem.amount--;
    localStorage.removeItem(index);
    localStorage.setItem(index, JSON.stringify(currentItem));
  } else {
    localStorage.removeItem(index);
  }
};

const removeFromBasket = () => {
  const deleteButton = $(".delete-button");
  deleteButton.on("click", (event) => {
    let index = event.target.id;
    index = index.toString();
    index = index.replace("d", "");
    index = parseInt(index);
    removeFromArray(index);
    initBasket();
  });
};

export default removeFromBasket;
