const getToys = () => {
  const toys = [];
  Object.keys(localStorage).forEach((toy) => {
    const currentItem = JSON.parse(localStorage.getItem(toy));
    toys.push(currentItem);
  });
  return toys;
};

export default getToys;
