import toys from "./toys.json";

const setFixItems = () => {
  if (localStorage.length === 0) {
    toys.toys.forEach((toy, i) => {
      localStorage.setItem(i, JSON.stringify(toy));
    });
  }
};

export default setFixItems;
