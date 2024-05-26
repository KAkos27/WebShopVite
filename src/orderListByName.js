const orderListByName = (toys, order) => {
  toys.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 * order : -1 * order;
  });

  return toys;
};

export default orderListByName;
