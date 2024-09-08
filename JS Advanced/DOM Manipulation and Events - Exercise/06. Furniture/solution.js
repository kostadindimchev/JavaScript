function solve() {
  const tbody = document.getElementsByTagName('tbody')[0];
  const textAreas = document.getElementsByTagName('textarea');
  const buttons = document.getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    const list = JSON.parse(textAreas[0].value);

    for (const el of list) {
      let tr = document.createElement('tr');

      const imageData = document.createElement('td');
      const img = document.createElement('img');
      img.src = el.img;
      imageData.appendChild(img);
      tr.appendChild(imageData);

      const nameData = document.createElement('td')
      const furnitureName = document.createElement('p');
      nameData.appendChild(furnitureName);
      tr.appendChild(nameData);

      const priceData = document.createElement('td');
      const price = document.createElement('p');
      priceData.appendChild(price);
      tr.appendChild(priceData);

      const decFactorData = document.createElement('td');
      const decFactor = document.createElement('p');
      decFactorData.appendChild(decFactor);
      tr.appendChild(decFactorData);

      furnitureName.textContent = el.name;
      priceData.children[0].textContent = el.price;
      decFactorData.children[0].textContent = el.decFactor;

      const inputData = document.createElement('td')
      const input = document.createElement('input');
      input.type = 'checkbox';
      inputData.appendChild(input);
      tr.appendChild(inputData);

      tbody.appendChild(tr);
    }  
  })

  buttons[1].addEventListener('click', () => {
    const furnitures = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    const checkboxes = Array
      .from(document.querySelectorAll('tbody input'))
      .filter(x => x.checked);

    for (const checkbox of checkboxes) {
      const [name, price, decFactor] =
        checkbox.parentElement.parentElement.querySelectorAll('td p');

      furnitures.push(name.textContent);
      totalPrice += Number(price.textContent);
      avgDecFactor += Number(decFactor.textContent);
    }

    avgDecFactor /= furnitures.length;

    textAreas[1].value = `Bought furniture: ${furnitures.join(', ')}\n` +
    `Total price: ${totalPrice.toFixed(2)}\n` +
    `Average decoration factor: ${avgDecFactor}`;
  })
}