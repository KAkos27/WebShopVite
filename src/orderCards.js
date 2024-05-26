import init from "./init.js";
import orderListByName from "./orderListByName.js";
import orderListByPriceAsc from "./orderListByPriceAsc.js";
import orderListByPriceDesc from "./orderListByPriceDesc.js";

const orderCards = (toys) => {
  const options = $("#sort-options");
  options.on("change", (event) => {
    const index = event.target.value;
    if (index == 2) {
      toys = orderListByName(toys, 1);
    } else if (index == 3) {
      toys = orderListByName(toys, -1);
    } else if (index == 4) {
      toys = orderListByPriceAsc(toys);
    } else if (index == 5) {
      toys = orderListByPriceDesc(toys);
    }
    init(toys);
  });
};

export default orderCards;
