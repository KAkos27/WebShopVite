import generateBasketText from "./generateBasketText.js";
import createHtmlElement from "./createHtmlElement.js";
import removeFromBasket from "./removeFromBasket.js";
import increaseBasketAmount from "./increaseBasketAmount.js";

const initBasket = () => {
  const basketContainer = $(".basket");
  const basketText = generateBasketText();
  createHtmlElement(basketContainer, basketText);
  removeFromBasket();
  increaseBasketAmount();
};

export default initBasket;
