const orderListByPriceAsc = (toys) => {
  return toys.sort((a, b) => {
    return a.price - b.price;
  });
};

export default orderListByPriceAsc;
