const generateBasketText = () => {
  let text = `<table class="basket__table">`;
  let final = 0;
  Object.keys(sessionStorage).forEach((item) => {
    const currentItem = JSON.parse(sessionStorage.getItem(item));
    const currentPrice = currentItem.price * currentItem.amount;
    text += `
        <tr>
          <td>${currentItem.name}</td>
          <td class="price-td">${currentPrice} Ft</td>
          <td>${currentItem.amount} db</td>
          <td class="delete-button" id=d${item}>-</td>
          <td class="add-button" id="a${item}">+</td>
        </tr>`;
    final += currentPrice;
  });
  text += `<tr class="sum">
            <td><strong>Végösszeg: </strong></td>
            <td class="price-td">${final} Ft</td>
            <td></td>
            <td></td>
            <td></td> 
          </tr>
        </table>`;

  return text;
};

export default generateBasketText;
