const clickBasketButton = () => {
  const basketButton = $(".basket-button");
  basketButton.on("click", () => {
    const basket = $(".basket-container");
    basket.toggleClass("invisible");
  });
};

export default clickBasketButton;
