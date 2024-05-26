const orderListByPriceDesc = (toys) => {
  return toys.sort((a, b) => {
    return b.price - a.price;
  });
};

export default orderListByPriceDesc;
