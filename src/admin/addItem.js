import getToys from "../../data/getToys.js";
import init from "../init.js";

const addItem = () => {
  const addItemButton = $("#add-item");
  addItemButton.on("click", (event) => {
    event.preventDefault();
    const itemName = $("#item-name").val();
    const itemInfo = $("#description").val();
    const itemPrice = parseInt($("#price").val());

    let toys = getToys();

    const item = {
      id: toys.length,
      name: itemName,
      info: itemInfo,
      amount: 1,
      price: itemPrice,
    };

    localStorage.setItem(item.id, JSON.stringify(item));

    toys = getToys();
    init(toys);
  });
};

export default addItem;
