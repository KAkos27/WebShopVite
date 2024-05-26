import createHtmlElement from "./createHtmlElement.js";
import generateCardText from "./generateCardText.js";

const createCards = (toys) => {
  const htmlText = generateCardText(toys);
  const article = $(".card-container");
  createHtmlElement(article, htmlText);
};

export default createCards;
