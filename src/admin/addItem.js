import getToys from "../../data/getToys.js";
import init from "../init.js";

const addItem = () => {
  const addItemButton = $("#add-item");
  addItemButton.on("click", (event) => {
    event.preventDefault();
    const itemName = $("#item-name").val();
    const itemInfo = $("#description").val();
    const itemPrice = parseInt($("#price").val());

    const item = {
      name: itemName,
      info: itemInfo,
      amount: 1,
      price: itemPrice,
    };

    console.log(item);

    let toys = getToys();
    localStorage.setItem(toys.length, JSON.stringify(item));

    toys = getToys();
    init(toys);
  });
};

export default addItem;
