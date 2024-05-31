import getToys from "../../data/getToys.js";
import init from "../init.js";

const removeItem = () => {
  const deleteButton = $(".delete-item-button");
  deleteButton.on("click", (event) => {
    let id = event.target.id;
    id = id.toString();
    id = id.replace("r", "");
    id = parseInt(id);
    localStorage.removeItem(id);

    const toys = getToys();
    init(toys);
  });
};

export default removeItem;
