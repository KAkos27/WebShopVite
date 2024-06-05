const generateTableText = (toys) => {
  let txt = `
    <table>
      <tr>
        <th>Név</th>
        <th>Ár</th>
        <th>Törlés</th>
      </tr>`;
  toys.forEach((toy) => {
    txt += `<tr>
              <td>${toy.name}</td>
              <td>${toy.price} Ft</td>
              <td id=r${toy.id} class="delete-item-button">x</td>
            </tr>`;
  });
  txt += `</table>`;
  return txt;
};

export default generateTableText;
