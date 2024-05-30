const generateCardText = (toys) => {
  let text = ``;
  toys.forEach((toy) => {
    text += `
      <div class='card'>
        <h3><strong>${toy.name}</strong></h3>
        <p class="card-info">${toy.info}</p>
        <p class="card-price"><strong>${toy.price} Ft</strong></p>
        <button class='card__add-button' id=${toy.id}>Kosárba</button>
        <img src='/toy-pic.svg' alt=''>
      </div>`;
  });
  return text;
};

export default generateCardText;
