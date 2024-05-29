import generateTableText from "./generateTableText.js";
import createHtmlElement from "../createHtmlElement.js";

const initTable = (toys) => {
  const htmlText = generateTableText(toys);
  const container = $(".table-container");
  createHtmlElement(container, htmlText);
};

export default initTable;
