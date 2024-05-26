import generateTableText from "./generateTableText.js";
import createHtmlElement from "../createHtmlElement.js";

const createTable = (toys) => {
  const htmlText = generateTableText(toys);
  const container = $(".table-container");
  createHtmlElement(container, htmlText);
};

export default createTable;
