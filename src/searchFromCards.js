import init from "./init.js";

const sortArrayBySearchResult = (toys, searched) => {
  const orderedArray = toys.filter((toy) => {
    return toy.name.toLowerCase().includes(searched);
  });

  return orderedArray;
};

const searchFromCards = (toys) => {
  const searchBar = $("#search-bar");
  searchBar.on("keyup", () => {
    const searched = searchBar.val().toLowerCase();
    const orderedArray = sortArrayBySearchResult(toys, searched);
    init(orderedArray);
  });
};

export default searchFromCards;
